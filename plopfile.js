module.exports = function (plop) {
  plop.setGenerator('widget', {
    description: 'Create a new widget',
    prompts: [
      {
        type: 'input',
        name: 'name', // 질문에 대한 답변은 'name' 변수에 저장됨
        message: 'What is your widget name? (e.g., main-header)',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/widgets/{{kebabCase name}}', // 생성될 위치
        base: 'plop-templates/widget', // 템플릿 파일이 있는 위치
        templateFiles: 'plop-templates/widget/**/*.hbs',
      },
    ],
  });
};
