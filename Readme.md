In my Color Palette Generator project, I learned how to copy text (such as hex color codes) to the clipboard using the Clipboard API—specifically, the method navigator.clipboard.writeText(text).

This method is:

-->> Asynchronous, so it returns a Promise.
-->> It only works in secure contexts, meaning HTTPS websites or localhost during development.