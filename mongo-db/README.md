# Instalación de MongoDB

1. Si no tienes instalado homebrew

```sh
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Si no tienes instaladas las herramientas de linea de comandos de Xcode.

```sh
$ xcode-select --install
```

3. Descargar la fórmula oficial de Homebrew para MongoDB y las herramientas de base de datos.

```sh
$ brew tap mongodb/brew
```

4. Instalar MongoDB.

```sh
$ brew install mongodb-community@4.4
```

5. Iniciar Demonio de MongoDB

```sh
$ brew services start mongodb-community@4.4
```

6. Detener Demonio de MongoDB

```sh
$ brew services stop mongodb-community@4.4
```
