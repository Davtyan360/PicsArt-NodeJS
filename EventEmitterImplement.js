class EventEmit {
  static obj = {};
  static on(path, func) {
    this.obj[path] = { path: path, func: func };
  }
  static emit(path, ...args) {
    if (!this.obj[path]) return false;
    this.obj[path].func(...args);
    delete this.obj[path]
    return true;
  }
}

module.exports = EventEmit;
