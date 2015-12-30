# 	Markdown 
Небольшой обзор инструментов для удобной стилизации текста при помощи синтаксиса разметки markdown.

## Базовый синтаксис Markdown
Синтаксис для форматирования  текстовых документов  с расширением .md или .markdown
Markdown позволяет посредством разметки стилизовать текст, не прибегая к дополнительным иструментам.
Кроме того, позволяет осуществить подсвету синтаксиса не только текста, но и кода.

[Базовый синтаксис](https://help.github.com/articles/markdown-basics/)

Например, так будут форматироваться заголовки:

<pre><code># This is an H1

## This is an H2

###### This is an H6
</code></pre>

## (GitHub-Flavored) Markdown Editor

[Редактор Markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown) с расширенными возможностями.

Также доступен [Онлайн-редактор](https://jbt.github.io/markdown-editor/) 

## Плагин для Sublime Text 2/3  Markdown Preview
Позволяет компилировать markdown-файлы в html  для просмотра в браузере.

### Установка через [PackageControl](https://packagecontrol.io/)

1. Убедитесь, что у вас устновлен [PackageControl](https://packagecontrol.io/):
2. Сочетание клавиш `cmd`+`shift`+`P`, затем выберите в меню `Package Control: Install Package`
3. Найдите в списке `Markdown Preview` и установите.

### Использование

* Выберите markdown файлы, которые вы хотите сконвертировать
* Сочетание клавиш `cmd`+`shift`+`P`, затем `Markdown Preview` и из списка команд выберите нужные действия.
	- Markdown Preview: Preview in Browser (просмотр в браузере)
	- Markdown Preview: Export HTML in Sublime Text (экспорт в html)
	- Markdown Preview: Copy to Clipboard (копировать в буфер обмена)
	- Markdown Preview: Open Markdown Cheat sheet (просмотреть обзор доступных команд)

Плагин также имеет множество расширенных настроек. Полная документация на портале проекта  [GitHub](https://github.com/revolunet/sublimetext-markdown-preview)

Еще один [Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)	

## Dillinger

[Онлайн-редактор](http://dillinger.io/) markdown разметки с  облачной поддержкой:

* Поддерживает экспорт в HTML, в HTML cо стилями и в PDF.
* Может синхронизироваться с учетными записями Github, Dropbox, Google Drive и OneDrive.
* Встроенная поддержка подсветки синтаксиса. 

Например:

```javascript
var appWidget = (function() { 

	var widget = [];
	return { 
		method: function(values) { 		
			widget.push(values);
		}
	} 

}());
```
[Проект на GitHub](https://github.com/joemccann/dillingerr)
