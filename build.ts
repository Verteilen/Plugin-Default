import { PluginBuild } from "verteilen-core";
import { BuildIn_ProjectTempGroup, BuildIn_DatabaseTempGroup } from './src/projectTemplate'

PluginBuild(
"dist",
{
    plugins: [
        {
            name: "Default",
            description: "Default Test Program",
            requireVersion: "1.3",
            version: "0.2.0",
            contents: [
                {
                    filename: "Default.exe",
                    url: "https://github.com/Verteilen/Plugin-Default/releases/download/v1.0/Default.exe",
                    platform: "win32",
                    arch: "x64",
                    unpack: false,
                },
                {
                    filename: "Default",
                    url: "https://github.com/Verteilen/Plugin-Default/releases/download/v1.0/Default",
                    platform: "linux",
                    arch: "x64",
                    unpack: false,
                }
            ]
        }
    ]
}, {
    projects: BuildIn_ProjectTempGroup,
    databases: BuildIn_DatabaseTempGroup
})