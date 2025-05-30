# PowerShell script to copy built files to root directory
param(
    [string]$SourceDir = "./out",
    [string]$DestDir = "../"
)

Write-Host "Copying files from $SourceDir to $DestDir"

# Check if source directory exists
if (-not (Test-Path $SourceDir)) {
    Write-Error "Source directory $SourceDir does not exist"
    exit 1
}

# Create destination directory if it doesn't exist
if (-not (Test-Path $DestDir)) {
    New-Item -ItemType Directory -Path $DestDir -Force
}

# Clean up old files in root (except _Build and other important files)
$filesToRemove = @(
    "$DestDir/_next",
    "$DestDir/gallery", 
    "$DestDir/music",
    "$DestDir/projects", 
    "$DestDir/resume",
    "$DestDir/images",
    "$DestDir/index.html",
    "$DestDir/404.html",
    "$DestDir/404"
)

foreach ($file in $filesToRemove) {
    if (Test-Path $file) {
        Write-Host "Removing old file/directory: $file"
        Remove-Item -Path $file -Recurse -Force -ErrorAction SilentlyContinue
    }
}

# Copy all files from out directory to root
Write-Host "Copying new files..."
Copy-Item -Path "$SourceDir/*" -Destination $DestDir -Recurse -Force

Write-Host "Files copied successfully!"

# List copied files
Write-Host "Files in root directory:"
Get-ChildItem -Path $DestDir -Name | Where-Object { $_ -ne "_Build" -and $_ -ne ".git" -and $_ -ne "node_modules" -and $_ -ne "package.json" -and $_ -ne "package-lock.json" -and $_ -ne "README.md" -and $_ -ne ".gitignore" -and $_ -ne "next.config.js" -and $_ -ne "public" -and $_ -ne "out" }
