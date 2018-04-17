# List my Repos
<p align="center">
<img src="https://raw.githubusercontent.com/iddar/List-my-Repos/master/screenshot.png" width="400" style="margin:auto;">
</p>

Esta aplicación lista los repositorios un usuario de github, o almenos eso es lo que se pretende. Ya que se encuentra incompleta de momento solo lista los datos de duros de un usuario en especifico, para pasar esta prueba debes de ser capaz de escribir la lógica faltante para esto.

Se espera que el usuario pueda teclear su usuario y tras enviar el formulario, vea una lista de los repositorios ligados a su cuenta.

Para completar esta prueba no puedes agregar dependencias al proyecto, debes usar solo lo que esté disponible ya en el proyecto. Deberas completar la function `getUserRepos` que se encuentra en el archivo `src/actions/request.js` y modificar algunas de las partes existentes. No te olvides de eliminar la constante `sample` del archivo `request` al terminar tu prueba ya que todos los datos debes de consumirlos directo de la API de github.

Deberás consumir la API de github puedes encontrar documentación de la misma en la siguiente liga [developer.github.com/v3/repos](https://developer.github.com/v3/repos/), te dejamos un tip en el código y varias pistas para que te sea más fácil resolver este problema.

Tips: 
- Las peticiones al servidor pueden fallar muchas veces, sera bueno que tomes encuenta estos casos para ofrecer al usuario una mejor experiencia.
- Es valido agragar o quitar todo el codigo que quieras, solo recuarda mantener la funcionalidad.
- Realiza todas las prubas necesarias antes de dar por terminado tu proyecto.

Dejo algunos enlaces que te pueden ayudar:

- [React lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
- [Fetch metod](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [ES6 features](https://github.com/lukehoban/es6features)
