import * as vscode from 'vscode';
import { execShell } from './execShell';
import getKeployVersion from './version';

export async function downloadAndUpdate(downloadUrl: string , webview : any): Promise<void> {
    try {
        let output = '';
        if(process.platform === 'win32'){
            output= await execShell('keploy  --version');
        }else{
            output= await execShell('/usr/local/bin/keploybin --version');
        }
        // const output = await execShell('alias keploy');

        console.log('output:', output);
        const keployIndex = output.indexOf('Keploy');
        console.log('keployIndex:', keployIndex);
        let keployVersion = '';
        if (keployIndex !== -1) {
            keployVersion = output.substring(keployIndex + 'Keploy'.length).trim();
        }
        console.log('Current Keploy version:', keployVersion);
        const latestVersion = await getKeployVersion();
        // Remove "v" from the beginning of the latest version string, if present
        const formattedLatestVersion = latestVersion.startsWith('v') ? latestVersion.substring(1) : latestVersion;

        console.log('Latest Keploy version:', formattedLatestVersion);

        if (keployVersion === formattedLatestVersion) {
            vscode.window.showInformationMessage('Keploy is already up to date');
            return;
        }

        console.log('Downloading and updating Keploy binary...');
        vscode.window.showInformationMessage('Downloading and updating Keploy binary...');
        downloadAndInstallKeployBinary(webview).then(() => {
            vscode.window.showInformationMessage('Updated Keploy binary successfully!');
        }
        ).catch(error => {

            console.error('Failed to update Keploy binary:', error);
            vscode.window.showErrorMessage('Failed to update Keploy binary oh no: ' + error);
            throw error;
        }
        );
        
    } catch (error : any) {
        if (error.toString().includes("keploybin: not found") || error.toString().includes("keploybin: command not found") || error.toString().includes("keploybin: no such file or directory")){
            //post message to webview
            webview.postMessage({ type: 'onError', value: `Keploy binary not found. Installing Keploy binary first.` });
            downloadAndInstallKeployBinary(webview).then(() => {
                vscode.window.showInformationMessage('Updated Keploy binary successfully!');
            }
            ).catch(error => {
                console.error('Failed to update Keploy binary here:', error);
                vscode.window.showErrorMessage('Failed to update Keploy binary: ' + error);
                throw error;
            }
            );
        }else{
        console.error('Error occurred during download and update:', error);
        vscode.window.showErrorMessage('Error occurred during updating binary: ' + error);
        throw error;
        }
    }
}

export async function downloadAndUpdateDocker(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        console.log('Downloading and updating Keploy Docker image...');
        const dockerCmd = 'docker pull ghcr.io/keploy/keploy:latest';
        execShell(dockerCmd).then(() => {
            vscode.window.showInformationMessage('Updated Keploy Docker image successfully!');
            resolve();
        }).catch(error => {
            console.error('Failed to update Keploy Docker image:', error);
            vscode.window.showErrorMessage('Failed to update Keploy Docker image: ' + error);
            reject(error);
        }
        );
    }
    );
}

export async function downloadAndInstallKeployBinary( webview : any): Promise<void> {
    console.log('Downloading and installing Keploy binary...');
    return new Promise<void>((resolve, reject) => {

        try {
            let bashPath: string;
            if (process.platform === 'win32') {
                // If on Windows, use the correct path to WSL's Bash shell
                bashPath = 'wsl.exe';
            } else {
                // Otherwise, assume Bash is available at the standard location
                bashPath = '/bin/bash';
            }
            // Create a new terminal instance with the Bash shell
            const terminal = vscode.window.createTerminal({
                name: 'Keploy Terminal',
                shellPath: bashPath
            });

            // Show the terminal
            terminal.show();

            const curlCmd = " curl -O https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh && source keploy.sh && exit 0";
            terminal.sendText(curlCmd);
            
            vscode.window.showInformationMessage('Downloading and updating Keploy binary...');
            // Listen for terminal close event
            const disposable = vscode.window.onDidCloseTerminal(eventTerminal => {
                console.log('Terminal closed');
                if (eventTerminal === terminal) {
                    disposable.dispose(); // Dispose the listener
                    resolve(); 
                }
            });
        } catch (error) {
            reject(error); // Reject the promise if an error occurs during execution
        }
    });
}

        
