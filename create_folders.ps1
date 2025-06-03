$folders = @(
    'assets/css',
    'assets/images',
    'assets/fonts',
    'components/ui',
    'components/layout',
    'components/forms',
    'composables/stores',
    'composables/utils',
    'layouts',
    'pages/auth',
    'pages/entreprise',
    'pages/admin',
    'stores',
    'types',
    'public/images',
    'public/icons',
    'locales/fr-FR',
    'locales/en-US'
)

foreach ($folder in $folders) {
    $path = Join-Path -Path $PSScriptRoot -ChildPath $folder
    if (-not (Test-Path -Path $path)) {
        New-Item -ItemType Directory -Path $path -Force | Out-Null
        Write-Host "Created directory: $folder"
    } else {
        Write-Host "Directory already exists: $folder"
    }
}

Write-Host "All directories have been created successfully!" -ForegroundColor Green
