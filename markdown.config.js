const path = require('path')

const TABLE_HEADER = `
| S. No. | Name | Project \`<project>\` |
| --- | --- | --- |
`.trim()

module.exports = {
  transforms: {
    PROJECTS (content, options) {
      const { path: filePath } = options
      const projects = require(path.resolve(filePath))
      const list = Object.keys(projects)
        .map((name, index) => {
          const project = projects[name]
          return [
            '',
            `${index + 1}.`,
            project.name,
            `\`${name}\``,
            ''
          ].join('|')
        })

      return [
        TABLE_HEADER,
        list.join('\n')
      ].join('\n')
    }
  }
}
