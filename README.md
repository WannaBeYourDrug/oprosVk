# oprosVk

![ExamlpeScreenshot](https://image.prntscr.com/image/Q3JXZkmOQ9umi341kv9F2w.png)

Плагин для **jQuery**. Симулирует опрос ВКонтакте.

## Использование:
```html
  <link rel="stylesheet" href="oprosVk.css">
  <script src="jquery.js"></script>
  <script src="jquery.oprosVk.js"></script>
  <script>
    $('#form').oprosVk({
      //params
    });
  </script>
```

## Параметры
* type:
  * open: Открытое голосование
  * anon: Анонимное голосование
  * input: Определяется пользователем
* inputSubjectName: Значение атрибута *name* у тэга *input* с темой опроса
* inputOptionTextClass: Значение атрибута *class* у тэга *input* с текстом варианта ответа
* inputOptionCountClass: Значение атрибута *class* у тэга *input* со значением варианта ответа
* result: Селектор контейнера в который будет выводиться результат

## P.S.
Возможно вам пригодится это для создания презентаций или чего-либо ещё. Рабочий пример: https://projects.gdmone.ru/oprosVk
