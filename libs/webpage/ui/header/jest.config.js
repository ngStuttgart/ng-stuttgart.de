module.exports = {
  name: 'webpage-ui-header',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/webpage/ui/header',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
