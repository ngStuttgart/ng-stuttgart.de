module.exports = {
  name: 'webpage-feature-join',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/webpage/feature/join',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
