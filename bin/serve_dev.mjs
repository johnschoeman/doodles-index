import chokidar from "chokidar"
import util from "util"
import bs from "browser-sync"
import chalk from "chalk"
import { exec } from "child_process"

const browserSync = bs.create()
const execAsync = util.promisify(exec)

const logPrefix = "[" + chalk.blue("Developsync") + "]"
const log = console.log.bind(console, logPrefix)

const SOURCE_DIR = "./src"
const dotFilesRegex = /(^|[\/\\])\../

const port = 3000

const watcher = chokidar.watch(SOURCE_DIR, {
  ignored: dotFilesRegex,
  persistent: true,
})

const startDevServer = async log => {
  log("Starting dev server...")

  const buildApp = async () => {
    log("Building app...")
    try {
      const { stdout, stderr } = await execAsync(
        `bin/build.sh`,
      )
      log(stdout)
      if (stderr && stderr.length > 0) {
        log(stderr)
      }
    } catch (error) {
      const { stderr, stdout } = error
      log(stdout)
      log(stderr)
    }
  }

  await buildApp()

  browserSync.init({
    open: false,
    server: "./build",
    port,
  })

  watcher.on("change", async (path, status) => {
    log(path, status)
    await buildApp()
    browserSync.reload()
  })
}

startDevServer(log)
