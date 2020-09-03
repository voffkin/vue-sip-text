const {typograph} = require('./typograph');

test('в, на, —', () => {
  expect(typograph('еду в Магадан')).toEqual('еду в&nbsp;Магадан');
  expect(typograph('еду на работу')).toEqual('еду на&nbsp;работу');
  expect(typograph('еду в Магадан на работу')).toEqual('еду в&nbsp;Магадан на&nbsp;работу');
  expect(typograph('тире — один из знаков препинания')).toEqual('тире&nbsp;— один из&nbsp;знаков препинания');
  expect(typograph(`'<div class="t"><p>"<i>Какой-то текст<a href="/">link</a></i>"</p></div>'`)).toEqual(`'<div class="t"><p>"<i>Какой-то текст<a href="/">link</a></i>"</p></div>'`);
});
