module.exports = {
  name: 'webpage-feature-archive',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/webpage/feature/archive',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
