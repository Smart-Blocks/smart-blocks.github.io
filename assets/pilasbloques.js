'use strict';



;define("pilasbloques/app", ["exports", "pilasbloques/resolver", "ember-load-initializers", "pilasbloques/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("pilasbloques/breakpoints", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    mobile: '(max-width: 768px)',
    tablet: '(min-width: 769px) and (max-width: 992px)',
    desktop: '(min-width: 993px) and (max-width: 1200px)',
    jumbo: '(min-width: 1201px)'
  };
  _exports.default = _default;
});
;define("pilasbloques/components/ember-blockly-catalog", ["exports", "ember-blockly/components/ember-blockly-catalog"], function (_exports, _emberBlocklyCatalog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberBlocklyCatalog.default;
    }
  });
});
;define("pilasbloques/components/ember-blockly-list-item", ["exports", "ember-blockly/components/ember-blockly-list-item"], function (_exports, _emberBlocklyListItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberBlocklyListItem.default;
    }
  });
});
;define("pilasbloques/components/ember-blockly-list-with-selection", ["exports", "ember-blockly/components/ember-blockly-list-with-selection"], function (_exports, _emberBlocklyListWithSelection) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberBlocklyListWithSelection.default;
    }
  });
});
;define("pilasbloques/components/ember-blockly-preview", ["exports", "ember-blockly/components/ember-blockly-preview"], function (_exports, _emberBlocklyPreview) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberBlocklyPreview.default;
    }
  });
});
;define("pilasbloques/components/ember-blockly", ["exports", "ember-blockly/components/ember-blockly"], function (_exports, _emberBlockly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberBlockly.default;
    }
  });
});
;define("pilasbloques/components/ember-modal-dialog-positioned-container", ["exports", "ember-modal-dialog/components/positioned-container"], function (_exports, _positionedContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _positionedContainer.default;
    }
  });
});
;define("pilasbloques/components/ember-modal-dialog/-basic-dialog", ["exports", "ember-modal-dialog/components/basic-dialog"], function (_exports, _basicDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDialog.default;
    }
  });
});
;define("pilasbloques/components/ember-modal-dialog/-in-place-dialog", ["exports", "ember-modal-dialog/components/in-place-dialog"], function (_exports, _inPlaceDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _inPlaceDialog.default;
    }
  });
});
;define("pilasbloques/components/ember-modal-dialog/-liquid-dialog", ["exports", "ember-modal-dialog/components/liquid-dialog"], function (_exports, _liquidDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidDialog.default;
    }
  });
});
;define("pilasbloques/components/ember-modal-dialog/-liquid-tether-dialog", ["exports", "ember-modal-dialog/components/liquid-tether-dialog"], function (_exports, _liquidTetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidTetherDialog.default;
    }
  });
});
;define("pilasbloques/components/ember-modal-dialog/-tether-dialog", ["exports", "ember-modal-dialog/components/tether-dialog"], function (_exports, _tetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _tetherDialog.default;
    }
  });
});
;define("pilasbloques/components/ember-wormhole", ["exports", "ember-wormhole/components/ember-wormhole"], function (_exports, _emberWormhole) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberWormhole.default;
    }
  });
});
;define("pilasbloques/components/info-reportar-problema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("pilasbloques/components/listaImagenes", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // Autogenerado por scripts/generarListaImagenes.py
  // Todo cambio se sobreescribira.
  var _default = ["PlacaContarGris.png", "PlacaContarNegra.png", "actor.BoyScout.png", "actor.Fogata.png", "actor.charco.png", "actor.churrasco.png", "actor.coty.png", "actor.duba.png", "actor.ensaladera.png", "actor.lechuga.png", "actor.letra.leida.png", "actor.letra.manuscrita.png", "actor.letra.tablero.png", "actor.lita.png", "actor.tomate.png", "actor.toto.png", "alienAnimado.png", "alimento_pez.png", "balloon-tip-left.png", "balloon-tip-right.png", "balloon-tip-think-left.png", "balloon-tip-think-right.png", "balloon.png", "banana-1.png", "banana.nano.png", "boton.pboton_press.png", "botonAnimado.png", "bruja.png", "buzo.png", "caballero_oscuro.png", "camino-alien-boton.png", "cangrejo.png", "carbon_animado.png", "casilla.alienLevantaTuercas.png", "casilla.cangrejo_aguafiestas.png", "casilla.futbolRobots1.png", "casilla.futbolRobots2.png", "casilla.grisoscuro.png", "casilla.mariaSandia.png", "casilla.mono.contar.png", "casilla.prendiendoLasCompus.png", "casilla.prendiendoLasCompus2.png", "casilla.prendiendoLasFogatas.png", "casilla.prendiendoLasFogatas2.png", "casilla.recolector.png", "casilla.reparandoNave.png", "casilla.titoFinalizacion.png", "casilla.tresNaranjas.png", "casillaAbajo.png", "casillaArriba.png", "casillaDerecha.png", "casillaIzquierda.png", "casilla_base.png", "casillafinalmono.png", "casillainiciomono.png", "casillamediomono.png", "casillas.alien_inicial.png", "casillas.duba.png", "casillas.elPlanetaDeNano.png", "casillas.lita.png", "casillas.toto.png", "casillas.violeta.png", "cofreAnimado.png", "comedor_naranjas.png", "compu_animada.png", "computadoraAnimada2.png", "cooperativista.sprites.png", "detective.png", "dibujante.png", "dracula.png", "estrellaAnimada.png", "finCamino.png", "flechaEscenarioAleatorio.png", "focos.color.png", "fondo.BosqueDeNoche.png", "fondo.alimentando_peces.png.png", "fondo.blanco.png", "fondo.cangrejo_aguafiestas.png", "fondo.coty.png", "fondo.detective.png", "fondo.dibujando.figuras.png", "fondo.duba.png", "fondo.elMarcianoEnElDesierto.png", "fondo.elPlanetaDeNano.png", "fondo.elSuperviaje.png", "fondo.fiestadracula.png", "fondo.gatoEnLaCalle.png", "fondo.laberinto.corto.png", "fondo.laberinto.largo.png", "fondo.laberinto.queso.png", "fondo.lita.png", "fondo.marEncantado.png", "fondo.mariaSandia.png", "fondo.mono.contar.png", "fondo.monoCuentadeNuevo.png", "fondo.noMeCansoDeSaltar.png", "fondo.prendiendoLasCompus.png", "fondo.recolector.png", "fondo.salvandonavidad.png", "fondo.superTito1.png", "fondo.superTito2.png", "fondo.tito-cuadrado.png", "fondo.toto.png", "fondo.tresNaranjas.png", "fondos.alien-inicial.png", "fondos.alienLevantaTuercas.png", "fondos.biblioteca.png", "fondos.elPlanetaDeNano.png", "fondos.estrellas.png", "fondos.futbolRobots.png", "fondos.laberinto1.png", "fondos.mar.png", "fondos.navidad.png", "fondos.nubes.png", "fondos.obrero.png", "fondos.reparandoLaNave.png", "fondos.selva.png", "frank.png", "gatoAnimado.png", "globoAnimado.png", "heroe.png", "heroina.png", "hierro_animado.png", "hueso.png", "icono.ComputadoraPrendida.png", "iconos.lamparita.png", "instalador.png", "invisible.png", "lamparin.png", "libretaToto.png", "llaveAnimada.png", "mago.png", "manoToto.png", "manzanaConSombra.png", "manzanaSinSombra.png", "marcianoAnimado.png", "maria.png", "monkey_normal.png", "monoAnimado.png", "murcielago.png", "nano.png", "naranja.png", "naveAnimada.png", "obstaculo.duba1.png", "obstaculo.duba2.png", "obstaculo.duba3.png", "obstaculo.duba4.png", "obstaculo.lita1.png", "obstaculo.lita2.png", "obstaculo.lita3.png", "obstaculo.lita4.png", "papaNoel.png", "pelota.png", "pelotaAnimada.png", "pensamientoToto.png", "perro_cohete.png", "pez1.png", "pez2.png", "pez3.png", "placacontar.png", "plano.png", "portada.lightbot.png", "portada.nano.png", "princesa.png", "principe.png", "queso.png", "quesoAnimado.png", "raton.png", "ratonAnimado.png", "recolectorAnimado.png", "regalo.png", "robotAnimado.png", "sandia.png", "sin_imagen.png", "sospechosos.png", "sprites.png", "superheroe.png", "tito.png", "tuerca.png", "unicornio.heroina.png", "unicornio.png"];
  _exports.default = _default;
});
;define("pilasbloques/components/modal-ayuda", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',
    actions: {
      close: function close() {
        this.set("mostrar", false);
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/modal-dialog", ["exports", "ember-modal-dialog/components/modal-dialog"], function (_exports, _modalDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _modalDialog.default;
    }
  });
});
;define("pilasbloques/components/modal-title", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',
    actions: {
      ocultar: function ocultar() {
        if (this.close) this.close();
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-acerca-de", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-blockly", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/wrapNativeSuper"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _wrapNativeSuper2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: 'desafio-panel-derecho',
    ejecutando: false,
    terminoDeEjecutar: false,
    errorDeActividad: null,
    cola_deshacer: [],
    data_observar_blockly: false,
    actividad: null,
    interpreterFactory: Ember.inject.service(),
    abrirConsignaInicial: false,
    solucion: null,
    pilas: null,
    // Se espera que sea una referencia al servicio pilas.
    codigoJavascript: "",
    // Se carga como parametro
    persistirSolucionEnURL: false,
    // se le asigna una valor por parámetro.
    debeMostrarFinDeDesafio: false,
    codigo: null,
    modelActividad: null,
    modoTuboHabilitado: false,
    highlighter: Ember.inject.service(),
    availableBlocksValidator: Ember.inject.service(),
    bloques: [],
    codigoActualEnFormatoXML: '',
    // se actualiza automáticamente al modificar el workspace.
    anterior_ancho: -1,
    anterior_alto: -1,
    blockly_toolbox: [{
      category: '...',
      blocks: []
    }],
    pasoAPasoHabilitado: false,
    pausadoEnBreakpoint: false,
    javascriptCode: null,
    inyectarRedimensionado: Ember.on('init', function () {
      var _this = this;

      // Muestra el dialogo inicial si está definida la consigna inicial.
      if (this.get('actividad.actividad.consignaInicial')) {
        Ember.run.later(function () {
          _this.set('abrirConsignaInicial', true);
        });
      }
    }),
    debeMostarRegresarAlLibro: Ember.computed('model', function () {
      return true;
    }),
    debeMostarReiniciar: Ember.computed('ejecutando', 'terminoDeEjecutar', function () {
      return this.ejecutando || this.terminoDeEjecutar;
    }),
    estoyEnMoodle: Ember.computed('modoAlumno', 'modoDocente', function () {
      return this.modoAlumno || this.modoDocente;
    }),
    didInsertElement: function didInsertElement() {
      var _this2 = this;

      var event = new Event('terminaCargaInicial');
      window.dispatchEvent(event);
      Ember.run.scheduleOnce('afterRender', function () {
        _this2.set('blockly_toolbox', _this2.obtenerToolboxDesdeListaDeBloques(_this2.bloques));

        _this2.set('blockly_comments', _this2.get('actividad.puedeComentar'));

        _this2.set('blockly_disable', _this2.get('actividad.puedeDesactivar'));

        _this2.set('blockly_duplicate', _this2.get('actividad.puedeDuplicar')); // Elijo el estilo default de toolbox si es que no viene indicado en el desafio


        if (!_this2.modelActividad.get('estiloToolbox')) {
          _this2.modelActividad.set('estiloToolbox', 'desplegable');
        } // Si el código está serializado en la URL, lo intenta colocar en el
        // workspace.


        if (_this2.codigo) {
          var codigoSerializado = _this2.codigo;
          var codigoXML = atob(codigoSerializado);

          _this2.set('initial_workspace', codigoXML);
        } else if (_this2.modelActividad.get('solucionInicial')) {
          //también puede venir código de la configuración de la actividad.
          _this2.set('initial_workspace', _this2.modelActividad.get('solucionInicial'));
        } else {
          //Sino, el código por defecto es el empezar a ejecutar
          _this2.set('initial_workspace', _this2._xmlBloqueEmpezarAEjecutar());
        }
      });

      if (this.persistirSolucionEnURL) {} // TODO: puede que esto quede en desuso.
      // Este es un hook para luego agregar a la interfaz 
      // el informe deseado al ocurrir un error.


      this.pilas.on("errorDeActividad", function (motivoDelError) {
        Ember.run(_this2, function () {
          this.set('errorDeActividad', motivoDelError);
        });
      });
      $(window).trigger('resize');
    },
    _xmlBloqueEmpezarAEjecutar: function _xmlBloqueEmpezarAEjecutar() {
      return "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n      <block type=\"al_empezar_a_ejecutar\" x=\"15\" y=\"15\"></block>\n    </xml>";
    },

    /**
     * Genera el toolbox como lista de categorias con bloques a partir
     * de una lista de bloques simples.
     *
     * Por ejemplo:
     *
     *  >> obtenerToolboxDesdeListaDeBloques(['MoverDerecha', 'TocaSensor', 'TocaEnemigo'])
     *
     * [
     *    {
     *      category: 'Primitivas',
     *      blocks: ['MoverDerecha']
     *    },
     *    {
     *      category: 'Sensores',
     *      blocks: ['TocaSensor', 'TocaEnemigo']
     *    },
     * ]
     *
     */
    obtenerToolboxDesdeListaDeBloques: function obtenerToolboxDesdeListaDeBloques(bloques) {
      var _this3 = this;

      if (bloques === undefined) {
        throw new Error("La actividad no tiene bloques definidos, revise el fixture de la actividad para migrarla a ember-blocky.");
      }

      var toolbox = [];
      bloques.forEach(function (bloque) {
        var bloqueDesdeBlockly = _this3._obtenerBloqueDesdeBlockly(bloque);

        if (bloqueDesdeBlockly && bloqueDesdeBlockly.categoria) {
          _this3._agregar_bloque_a_categoria(toolbox, bloqueDesdeBlockly.categoria, bloque, bloqueDesdeBlockly.categoria_custom);
        } else {
          _this3._agregar_bloque_a_categoria(toolbox, 'SIN CATEGORÍA', bloque);
        }
      });
      toolbox.push({
        category: 'Separator',
        isSeparator: true
      });
      return this._aplicarEstiloAToolbox(this.ordenar_toolbox(toolbox));
    },

    /**
     * Dependiendo del desafío, puede pasar que sea necesario no mostrar las categorías
     * sino directamente los bloques en el toolbox.
     * 
     * TODO: Falta implementar el estilo "desplegado"
     */
    _aplicarEstiloAToolbox: function _aplicarEstiloAToolbox(toolbox) {
      var _this4 = this;

      var aplanado = toolbox;

      if (!this._debeHaberCategoriasEnToolbox()) {
        aplanado = [];
        toolbox.forEach(function (bloque) {
          if (bloque.isSeparator || !bloque.category) {
            aplanado.push(bloque); //un separador ó un id de bloque van directo
          } else {
            aplanado = aplanado.concat(_this4._aplicarEstiloAToolbox(bloque.blocks));
          }
        });
      }

      return aplanado;
    },
    _debeHaberCategoriasEnToolbox: function _debeHaberCategoriasEnToolbox() {
      return this.modelActividad.get('estiloToolbox') !== "sinCategorias";
    },

    /**
     * Ordena la lista de ítems de un toolbox (usualmente categorias), por el orden
     * establecido en Pilas Bloques. 
     * Las categorías que no están en la lista definida por Pilas Bloques, quedan al final.
     * @param {*} toolbox 
     */
    ordenar_toolbox: function ordenar_toolbox(toolbox) {
      var orden_inicial = [// Orden inicial para la lista de categorias.
      'Primitivas', 'Mis procedimientos', 'Repeticiones', 'Alternativas', 'Variables', 'Separator', 'Valores', 'Sensores', 'Operadores', 'Mis funciones'];
      return toolbox.sort(function (cat1, cat2) {
        return orden_inicial.indexOf(cat1.category) - orden_inicial.indexOf(cat2.category);
      });
    },

    /**
     * Permite obtener el bloque desde blockly a partir de su nombre simple.
     *
     * TODO: Mover a ember-blockly. Debería estar dentro del servicio blockly.
     */
    _obtenerBloqueDesdeBlockly: function _obtenerBloqueDesdeBlockly(bloqueComoString) {
      return Blockly.Blocks[bloqueComoString];
    },

    /**
     * Método auxiliar de "obtenerToolboxDesdeListaDeBloques". Este método
     * permite agregar un bloque a una categoría dentro del toolbox.
     */
    _agregar_bloque_a_categoria: function _agregar_bloque_a_categoria(toolbox, categoria, bloque, categoria_custom) {
      function obtenerOCrearCategoria(toolbox, categoria) {
        for (var i = 0; i < toolbox.length; i++) {
          if (toolbox[i].category === categoria) {
            return toolbox[i];
          }
        }

        toolbox.push({
          category: categoria,
          blocks: []
        });
        return toolbox[toolbox.length - 1];
      }

      var categoriaEnElToolbox = obtenerOCrearCategoria(toolbox, categoria);

      if (categoria_custom) {
        categoriaEnElToolbox.custom = categoria_custom;
      }

      categoriaEnElToolbox.blocks.push(bloque);
    },
    ejecutarInterpreteHastaTerminar: function ejecutarInterpreteHastaTerminar(interprete, pasoAPaso) {
      var _this5 = this;

      // Se abre una promise que termina cuando:
      //     o bien se llega al último comando escrito en el workspace
      //     o bien el usuario frena la ejecución
      //     o bien existe un error en la escena de pilas web
      return new Promise(function (success, reject) {
        var hayMasParaEjecutarDespues;

        var execInterpreterUntilEnd = function execInterpreterUntilEnd(interpreter) {
          // Si el usuario solicitó terminar el programa deja
          // de ejecutar el intérprete.
          if (!_this5.ejecutando) {
            success();
            return;
          }

          var err = _this5.errorDeActividad;

          if (err) {
            reject(new ErrorDeActividad(err));
            return;
          }

          try {
            if (pasoAPaso) {
              // Si está activado el modo depurador, intentará suspender
              // la llamada a interpreter.run() hasta que el usuario pulse
              // el botón step.
              if (interpreter.paused_ === false && !_this5.pausadoEnBreakpoint) {
                hayMasParaEjecutarDespues = interpreter.run();

                _this5.set('pausadoEnBreakpoint', true);
              }
            } else {
              hayMasParaEjecutarDespues = interpreter.run();
            }
          } catch (e) {
            console.log(e);
            reject(e);
          }

          if (hayMasParaEjecutarDespues) {
            // Llama recursivamente, abriendo thread en cada llamada.
            setTimeout(execInterpreterUntilEnd, 10, interpreter);
          } else {
            success();
          }
        };

        execInterpreterUntilEnd(interprete);
      });
    },
    cuandoTerminaEjecucion: function cuandoTerminaEjecucion() {
      Ember.run(this, function () {
        if (this.onTerminoEjecucion) this.onTerminoEjecucion();

        if (this.debeMostrarFinDeDesafio) {
          if (this.pilas.estaResueltoElProblema() && this.modelActividad.get('debeFelicitarse')) {
            this.send('abrirFinDesafio');
          }
        }

        if (this.ejecutando) {
          this.set('ejecutando', false);
          this.set('terminoDeEjecutar', true);
          this.clearHighlight();
        }
      });
    },
    willDestroyElement: function willDestroyElement() {
      window.removeEventListener('terminaCargaInicial', this.handlerCargaInicial, false);
    },
    restaurar_codigo: function restaurar_codigo(codigo) {
      var xml = Blockly.Xml.textToDom(codigo);

      if (Blockly.mainWorkspace) {
        Blockly.mainWorkspace.clear();
        Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
      }
    },
    setModoTurbo: function setModoTurbo() {
      if (this.modoTuboHabilitado) {
        this.pilas.habilitarModoTurbo();
      } else {
        this.pilas.deshabilitarModoTurbo();
      }
    },
    clearHighlight: function clearHighlight() {
      this.highlighter.clear();
    },
    shouldExecuteProgram: function shouldExecuteProgram() {
      return Blockly.mainWorkspace.getTopBlocks().filter(function (block) {
        return !block.disabled;
      }).every(function (block) {
        return Blockly.shouldExecute(block);
      });
    },
    actions: {
      ejecutar: function ejecutar() {
        var _this6 = this;

        var pasoAPaso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.pilas.reiniciarEscenaCompleta();
        Blockly.Events.fireRunCode();
        if (!this.shouldExecuteProgram()) return;
        this.setModoTurbo(); // Permite obtener el código xml al momento de ejecutar. Se utiliza
        // cuando se accede a la ruta curso/alumno para guardar la solución
        // del usuario en cada momento de ejecución.

        if (this.cuandoEjecuta) {
          var codigo_xml = this.codigoActualEnFormatoXML;
          this.cuandoEjecuta(codigo_xml);
        }

        var factory = this.interpreterFactory;
        var interprete = factory.crearInterprete(this.javascriptCode, function (bloqueId) {
          return _this6.highlighter.step(bloqueId);
        });
        this.set('pausadoEnBreakpoint', false);
        this.set('ejecutando', true);
        this.ejecutarInterpreteHastaTerminar(interprete, pasoAPaso).then(function () {
          return _this6.cuandoTerminaEjecucion();
        }).catch(ErrorDeActividad, function (err) {
          /** Los errores de la actividad no deberían burbujear */
        });
      },
      reiniciar: function reiniciar() {
        this.clearHighlight();
        this.set('ejecutando', false);
        this.set('terminoDeEjecutar', false);
        this.set('errorDeActividad', null);
        this.pilas.reiniciarEscenaCompleta();
      },
      guardar: function guardar() {
        if (this.guardar) this.guardar();
      },
      ver_codigo: function ver_codigo() {
        var codigo_como_string = this.actividad.generarCodigoXMLComoString();
        alert(codigo_como_string);
      },
      ingresar_codigo: function ingresar_codigo() {
        var codigo = prompt("Ingrese el código");

        if (codigo) {
          this.actividad.cargarCodigoDesdeStringXML(codigo);
        }
      },
      abrirFinDesafio: function abrirFinDesafio() {
        this.set('mostrarDialogoFinDesafio', true);
      },
      ocultarFinDesafio: function ocultarFinDesafio() {
        this.set('mostrarDialogoFinDesafio', false);
      },
      abrirReporteProblemas: function abrirReporteProblemas() {
        this.set('mostrarDialogoReporteProblemas', true);
      },
      cerrarReporteProblemas: function cerrarReporteProblemas() {
        this.set('mostrarDialogoReporteProblemas', false);
      },
      step: function step() {
        this.set('pausadoEnBreakpoint', false);
      },
      onChangeWorkspace: function onChangeWorkspace(xml) {
        if (this.isDestroyed) {
          return;
        }

        this.set('codigoActualEnFormatoXML', xml);
        if (this.onChangeWorkspace) this.onChangeWorkspace(xml);
      },
      onNewWorkspace: function onNewWorkspace() {
        this.availableBlocksValidator.disableNotAvailableBlocksInWorkspace(this.bloques);
      }
    }
  });

  _exports.default = _default;

  var ErrorDeActividad =
  /*#__PURE__*/
  function (_Error) {
    (0, _inherits2.default)(ErrorDeActividad, _Error);

    function ErrorDeActividad(exception) {
      (0, _classCallCheck2.default)(this, ErrorDeActividad);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorDeActividad).call(this, exception));
    }

    return ErrorDeActividad;
  }((0, _wrapNativeSuper2.default)(Error));
  /* jshint ignore:end */

});
;define("pilasbloques/components/pilas-botones-zoom", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'div',
    classNames: ['nw-zoom'],
    zoomValue: 100,
    zoom: Ember.inject.service(),
    canZoomIn: Ember.computed('zoomValue', function () {
      return this.zoomValue < 120;
    }),
    canZoomOut: Ember.computed('zoomValue', function () {
      return this.zoomValue > 80;
    }),
    cambiarZoom: Ember.observer('zoomValue', function () {
      this.zoom.setValue(this.zoomValue);
      this.aplicarZoom((this.zoomValue - 100) / 10);
    }),
    aplicarZoom: function aplicarZoom(zoomLevel) {
      document.body.style.zoom = 100 + zoomLevel * 10 + "%";
    },
    onStart: Ember.on('init', function () {
      this.set('zoomValue', this.zoom.getValue());
      this.cambiarZoom();
    }),
    actions: {
      zoomIn: function zoomIn() {
        this.set('zoomValue', this.zoomValue + 10);
      },
      zoomOut: function zoomOut() {
        this.set('zoomValue', this.zoomValue - 10);
      },
      zoomRestore: function zoomRestore() {
        this.set('zoomValue', 100);
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-canvas", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['pilas-canvas-container'],
    classNameBindings: ['media.isMobile:media-mobile'],
    iframeElement: null,
    escena: null,
    pilas: null,

    /* Se espera que este atributo se defina al
     * llamar al componente y es obligatorio. */
    didInsertElement: function didInsertElement() {
      Ember.run.scheduleOnce('afterRender', this, this.initElement);
    },
    willDestroyElement: function willDestroyElement() {
      if (this.pilas) {
        this.pilas.liberarRecursos();
      }
    },
    initElement: function initElement() {
      var _this = this;

      var iframeElement = this.element.querySelector('#innerIframe');
      this.set("iframeElement", iframeElement);

      this.iframeElement.onload = function () {
        if (_this.pilas) {
          _this.pilas.inicializarPilas(iframeElement, {
            width: 420,
            height: 480
          }, _this.escena).then(function (pilas) {
            if (_this.escena) {
              _this.pilas.inicializarEscena(iframeElement, _this.escena);
            } else {
              console.warn("No especificó una escena para cargar en pilas-canvas.");
            }
            /*
             * Invoca a la acción "onReady" que envía el objeto pilas listo
             * para ser utilizado.
             *
             */


            if (_this.onReady) {
              _this.onReady(pilas);
            } else {//console.warn("Se a iniciado el componente pilas-canvas sin referencia a la acción onLoad.");
            }
          });
        } else {
          console.warn("No has enviado el objeto pilas.");
        } // onLoad solo se utiliza dentro de la batería de tests. Este
        // componente se tendría que usar mediante el servicio "pilas"
        // en cualquier otro lugar.


        if (_this.onLoad) _this.onLoad({
          iframeElement: iframeElement
        });
      };
    },
    reloadIframe: function reloadIframe(onLoadFunction) {
      this.iframeElement.onload = onLoadFunction;
      this.iframeElement.contentWindow.location.reload(true);
    },
    actions: {
      execute: function execute(code) {
        var _this2 = this;

        this.reloadIframe(function () {
          alert("Ha cargado el código y está todo listo!");

          _this2.iframeElement.contentWindow.eval(code);
        });
      },
      clear: function clear() {
        this.reloadIframe();
      },
      quitFullscreen: function quitFullscreen() {
        this.set('inFullScreen', false);
      },
      enterFullscreen: function enterFullscreen() {
        this.set('inFullScreen', true);
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-cargando", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['contenido-principal', 'pilas-cargando-container']
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-desafio", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['desafio'],
    nombre: null,
    deshabilitada: false,
    actions: {
      abrir: function abrir() {
        if (this.onSelect) this.onSelect(this.nombre);
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-editor", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['contenedor-pilas-editor'],
    persistirSolucionEnURL: false,
    blocksGallery: Ember.inject.service(),
    cargando: true,
    showCode: false,
    modoLecturaSimple: Ember.computed('model', function () {
      return this.get('model.grupo.libro.modoLecturaSimple');
    }),
    didInsertElement: function didInsertElement() {
      this.blocksGallery.start();
    },
    actions: {
      onReady: function onReady(pilas) {
        if (this.onReady) this.onReady(pilas);
        this.set('cargando', false);

        if (this.modoLecturaSimple) {
          pilas.cambiarAModoDeLecturaSimple();
        }
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-header", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'nav',
    classNames: ['navbar', 'navbar-default'],
    mostrarDialogoAyuda: false,
    actions: {
      abrirAyuda: function abrirAyuda() {
        this.set('mostrarDialogoAyuda', true);
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-libro", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['pilas-libro-contenedor']
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-link", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',
    href: null,
    inElectron: false,
    didInsertElement: function didInsertElement() {
      this.set('inElectron', typeof process !== "undefined");
    },
    actions: {
      abrirConNavegadorExterno: function abrirConNavegadorExterno(url) {
        var _require = require("electron"),
            shell = _require.shell;

        shell.openExternal(url);
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-notificador", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    servicioNotificador: null,
    hayActualizacion: false,
    tagName: '',
    linkDescarga: _environment.default.linkDeDescarga,
    didInsertElement: function didInsertElement() {
      var inElectron = typeof process !== "undefined";

      if (this.servicioNotificador && inElectron) {
        /* Solo si está en la versión offline, sobre electron, espera 5 segundos
          * y consulta si existe una versión nueva para descargar. */
        Ember.run.later(this, function () {
          this.consultarSiExisteVersionNueva();
        }, 5000);
      }
    },
    consultarSiExisteVersionNueva: function consultarSiExisteVersionNueva() {
      var _this = this;

      this.servicioNotificador.consultar().then(function (data) {
        if (data.hayActualizacion) {
          _this.set('hayActualizacion', true);

          _this.set('versionMasReciente', data.version);

          console.log("Hay una actualizaci\xF3n disponible. La versi\xF3n ".concat(data.version, "."));
        } else {
          console.log("Se consult\xF3 buscando una nueva versi\xF3n, pero el servidor inform\xF3 la versi\xF3n ".concat(data.version, " as\xED que no hace falta actualizar..."));
        }
      }, function (error) {
        console.warn("Se quiso consultar una nueva versión pero falló el request", error);
      });
    },
    actions: {
      cerrar: function cerrar() {
        this.set('hayActualizacion', false);
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-solution-file", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var VERSION_DEL_FORMATO_DE_ARCHIVO = 2;

  var _default = Ember.Component.extend({
    tagName: 'span',
    cuandoSelecciona: null,
    actividad: null,
    workspace: null,
    xml: null,
    inElectron: typeof process !== "undefined",
    //TODO: Mover a un service y reemplazar a todos los lugares donde se usa.
    version: function version() {
      return VERSION_DEL_FORMATO_DE_ARCHIVO;
    },
    leerSolucionWeb: function leerSolucionWeb(archivo) {
      var _this = this;

      var reader = new FileReader();
      return new Promise(function (resolve, reject) {
        reader.onerror = function (err) {
          return reject(err);
        };

        reader.onload = function (event) {
          return resolve(event.target.result);
        };

        reader.readAsText(archivo);
      }).then(function (contenido) {
        return _this.cargarSolucion(contenido);
      });
    },
    leerSolucionFS: function leerSolucionFS(archivo) {
      var _this2 = this;

      var fs = Promise.promisifyAll(require("fs"));
      return fs.readFileAsync(archivo, 'utf-8').then(function (contenido) {
        return _this2.cargarSolucion(contenido);
      });
    },
    cargarSolucion: function cargarSolucion(contenido) {
      // let regex_file = /\.spbq$/
      // let regex_version = /^\d+$/
      var data = null;
      var solucion = null;

      try {
        data = JSON.parse(contenido);
        solucion = atob(data.solucion);
      } catch (e) {
        console.error(e);
        throw "Lo siento, este archivo no tiene una solución de Pilas Bloques.";
      }

      this.set('workspace', solucion);
      var errors = [];

      if (this.get("actividad.nombre") !== data.actividad) {
        errors.push("Cuidado, el archivo indica que es para otra actividad (".concat(data.actividad, "). Se cargar\xE1 de todas formas, pero puede fallar."));
      }

      if (VERSION_DEL_FORMATO_DE_ARCHIVO > data.version) {
        errors.push("Cuidado, el archivo indica que es de una versión anterior. Se cargará de todas formas, pero te sugerimos que resuelvas nuevamente el ejercicio y guardes un nuevo archivo.");
      }

      if (errors.length !== 0) {
        throw errors.join('\n');
      }
    },
    openElectronLoadDialog: function openElectronLoadDialog() {
      var dialog = require("electron").remote.dialog;

      var archivos = dialog.showOpenDialog({
        //TODO: this config exists in packaging/electron.js
        properties: ['openFile'],
        filters: [{
          name: 'Solución de Pilas Bloques',
          extensions: ['spbq']
        }, {
          name: 'Todos los archivos',
          extensions: ['*']
        }]
      });

      if (archivos) {
        this.leerSolucionFS(archivos[0]).catch(alert);
      }
    },
    descargar: function descargar(text, name, type) {
      var a = document.getElementById("placeholder");
      var file = new Blob([text], {
        type: type
      });
      a.href = URL.createObjectURL(file);
      a.download = name;
      a.type = type;
      a.click();
    },
    didInsertElement: function didInsertElement() {
      var _this3 = this;

      this.fileInput().change(function (event) {
        var archivo = event.target.files[0];

        if (archivo) {
          _this3.leerSolucionWeb(archivo).catch(alert);
        }

        _this3.limpiarInput(); // Fuerza a que se pueda cargar dos o más veces el mismo archivo


        return false;
      });
    },
    fileInput: function fileInput() {
      return this.$("#cargarActividadInput");
    },
    limpiarInput: function limpiarInput() {
      this.fileInput().value = null;
    },
    actions: {
      abrirSolucion: function abrirSolucion() {
        if (this.inElectron) {
          this.openElectronLoadDialog();
        } else {
          this.fileInput().click();
        }
      },
      guardarSolucion: function guardarSolucion() {
        var activityName = this.get("actividad.nombre");
        var fileName = "".concat(activityName, ".spbq");
        var contenido = {
          version: VERSION_DEL_FORMATO_DE_ARCHIVO,
          actividad: activityName,
          solucion: btoa(this.xml)
        };
        this.descargar(JSON.stringify(contenido), fileName, 'application/octet-stream');
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-spinner", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['content-spinner'],
    centered: false
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-splitter", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    classNames: ['pilas-splitter'],
    didInsertElement: function didInsertElement() {
      var _this = this;

      $(window).resize(function () {
        _this.fixLayout();
      });
      this.$('#splitter').on("mousedown", function (event) {
        event.preventDefault();
        $('#over-splitter').show();
        var initialX = event.pageX;
        var initialWidth = $(_this.panel).width();
        $('#over-splitter').on("mousemove", function (event) {
          var dx = event.pageX - initialX;
          var newWidth = initialWidth + dx; // Aplica límites de tamaño, entre 200 y 800.

          newWidth = Math.max(newWidth, 200);
          newWidth = Math.min(newWidth, 800);
          $(_this.panel).width(newWidth);
          $(window).trigger('resize');
          window.dispatchEvent(new Event('resize'));
        });
        $('.over-splitter').on("mouseup", function () {
          $('.over-splitter').off("mousemove");
          $('.over-splitter').hide();
        });
      });
    },
    willDestroyElement: function willDestroyElement() {
      $(window).off('resize');
    },
    fixLayout: function fixLayout() {
      var width = $(this.iframe).width();
      var height = width * 1.1428;
      $(this.iframe).height(height);
      $(this.ayuda).css('top', height);
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/components/pilas-toggle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: 'span'
  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/acercade", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    notificador: Ember.inject.service(),
    hayActualizacion: Ember.computed.alias('notificador.hayActualizacion'),
    versionMasReciente: Ember.computed.alias('notificador.versionActual'),
    actions: {
      visitarWeb: function visitarWeb() {
        var url = "http://bloques.pilas-engine.com.ar";
        window.open(url);
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    layout: true,
    queryParams: ['layout'],
    notificador: Ember.inject.service()
  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/desafio", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    pilas: Ember.inject.service(),
    queryParams: ['codigo'],
    codigo: "",
    codigoJavascript: '',
    actions: {
      cuandoCargaPilas: function cuandoCargaPilas()
      /*pilas*/
      {},
      onChangeWorkspace: function onChangeWorkspace()
      /*codigoDelWorkspace*/
      {}
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/desafios/curso-alumno", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    pilas: Ember.inject.service(),
    queryParams: ['codigo'],
    codigo: null,
    codigoJavascript: ''
  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/desafios/curso-docente", ["exports", "pilasbloques/controllers/desafios/curso-alumno"], function (_exports, _cursoAlumno) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _cursoAlumno.default.extend({});

  _exports.default = _default;
});
;define("pilasbloques/controllers/galeria", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['current_block'],
    current_block: null
  });

  _exports.default = _default;
});
;define("pilasbloques/controllers/libros/ver-libro", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({});

  _exports.default = _default;
});
;define("pilasbloques/controllers/test", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actividad: {
      iniciarEscena: function iniciarEscena() {
        var fondo = new pilas.fondos.Tarde(); // jshint ignore:line

        pilas.escena_actual().minZ = function () {
          return this.stage.children[this.stage.children.length - 1].z;
        };

        var p = new pilas.actores.Mono();
        p.transparencia = 50;
        var tablero = new Tablero(0, -40, {
          texto: "Hola?"
        }); // jshint ignore:line

        var tablero2 = new Tablero(100, -40, {
          texto: "Hola?"
        }); // jshint ignore:line

        var a = new pilas.actores.Aceituna();
        a.z = 10;
        a.x = [80];
        a.y = [20];
      },
      iniciarBlockly: function iniciarBlockly() {},
      finalizaCargarBlockly: function finalizaCargarBlockly() {}
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/electron/reload", [], function () {
  "use strict";

  function setupLivereload() {
    var process = window ? window.processNode : null; // Exit immediately if we're not running in Electron

    if (!window.ELECTRON || process && process.env && process.env.DO_NOT_SETUP_LIVERELOAD) {
      return;
    } // Reload the page when anything in `dist` changes


    var fs;
    var path;
    var devtron;

    try {
      fs = window.requireNode('fs');
      path = window.requireNode('path');
    } catch (e) {
      console.warn('ember-electron tried to require fs and path to enable live-reload features, but failed.');
      console.warn('Automatic reloading is therefore disabled.');
      console.warn(e);
      return;
    }
    /**
     * @private
     * Watch a given directory for changes and reload
     * on change
     *
     * @param sub directory
     */


    function watch() {
      var _path;

      for (var _len = arguments.length, sub = new Array(_len), _key = 0; _key < _len; _key++) {
        sub[_key] = arguments[_key];
      }

      var dirname = (_path = path).join.apply(_path, [__dirname].concat(sub));

      fs.watch(dirname, {
        recursive: true
      }, function () {
        return window.location.reload();
      });
    }
    /**
     * @private
     * Install Devtron in the current window.
     */


    function installDevtron() {
      try {
        devtron = window.requireNode('devtron');

        if (devtron) {
          devtron.install();
        }
      } catch (e) {// no-op
      }
    }
    /**
     * @private
     * Install Ember-Inspector in the current window.
     */


    function installEmberInspector() {
      var location;

      try {
        var eiLocation = window.requireNode.resolve('ember-inspector');
        location = path.join(eiLocation, 'dist', 'chrome');
      } catch (error) {
        location = path.join(__dirname, '..', 'node_modules', 'ember-inspector', 'dist', 'chrome');
      }

      fs.lstat(location, function (err, results) {
        if (err) {
          console.warn('Error loading Ember Inspector', err);
          return;
        }

        if (results && results.isDirectory && results.isDirectory()) {
          var BrowserWindow = window.requireNode('electron').remote.BrowserWindow;
          var added = BrowserWindow.getDevToolsExtensions && BrowserWindow.getDevToolsExtensions().hasOwnProperty('Ember Inspector');

          try {
            if (!added) {
              BrowserWindow.addDevToolsExtension(location);
            }
          } catch (err) {// no-op
          }
        }
      });
    }

    document.addEventListener('DOMContentLoaded', function ()
    /* e */
    {
      var dirname = __dirname || (process && (process || {}).cwd ? process.cwd() : null);

      if (!dirname) {
        return;
      }

      fs.stat(dirname, function (err
      /* , stat */
      ) {
        if (!err) {
          watch(); // On linux, the recursive `watch` command is not fully supported:
          // https://nodejs.org/docs/latest/api/fs.html#fs_fs_watch_filename_options_listener
          //
          // However, the recursive option WILL watch direct children of the
          // given directory.  So, this hack just manually sets up watches on
          // the expected subdirs -- that is, `assets` and `tests`.

          if (process && process.platform === 'linux') {
            watch('assets');
            watch('tests');
          }
        }
      });
      installDevtron();
      installEmberInspector();
    });
  }

  setupLivereload();
});
;define("pilasbloques/helpers/app-version", ["exports", "pilasbloques/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;
    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("pilasbloques/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _append.default;
    }
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function get() {
      return _append.append;
    }
  });
});
;define("pilasbloques/helpers/array", ["exports", "ember-composable-helpers/helpers/array"], function (_exports, _array) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _array.default;
    }
  });
  Object.defineProperty(_exports, "array", {
    enumerable: true,
    get: function get() {
      return _array.array;
    }
  });
});
;define("pilasbloques/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _chunk.default;
    }
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function get() {
      return _chunk.chunk;
    }
  });
});
;define("pilasbloques/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _compact.default;
    }
  });
});
;define("pilasbloques/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _compute.default;
    }
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function get() {
      return _compute.compute;
    }
  });
});
;define("pilasbloques/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _contains.default;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function get() {
      return _contains.contains;
    }
  });
});
;define("pilasbloques/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _dec.default;
    }
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function get() {
      return _dec.dec;
    }
  });
});
;define("pilasbloques/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _drop.default;
    }
  });
});
;define("pilasbloques/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _filterBy.default;
    }
  });
});
;define("pilasbloques/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _filter.default;
    }
  });
});
;define("pilasbloques/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _findBy.default;
    }
  });
});
;define("pilasbloques/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function get() {
      return _flatten.flatten;
    }
  });
});
;define("pilasbloques/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _groupBy.default;
    }
  });
});
;define("pilasbloques/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function get() {
      return _hasNext.hasNext;
    }
  });
});
;define("pilasbloques/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function get() {
      return _hasPrevious.hasPrevious;
    }
  });
});
;define("pilasbloques/helpers/ignore-children", ["exports", "ember-ignore-children-helper/helpers/ignore-children"], function (_exports, _ignoreChildren) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(_exports, "ignoreChildren", {
    enumerable: true,
    get: function get() {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
;define("pilasbloques/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function get() {
      return _inc.inc;
    }
  });
});
;define("pilasbloques/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _intersect.default;
    }
  });
});
;define("pilasbloques/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function get() {
      return _invoke.invoke;
    }
  });
});
;define("pilasbloques/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _join.default;
    }
  });
});
;define("pilasbloques/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mapBy.default;
    }
  });
});
;define("pilasbloques/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _map.default;
    }
  });
});
;define("pilasbloques/helpers/media", ["exports", "ember-responsive/helpers/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _media.default;
    }
  });
  Object.defineProperty(_exports, "media", {
    enumerable: true,
    get: function get() {
      return _media.media;
    }
  });
});
;define("pilasbloques/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function get() {
      return _next.next;
    }
  });
});
;define("pilasbloques/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function get() {
      return _objectAt.objectAt;
    }
  });
});
;define("pilasbloques/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function get() {
      return _optional.optional;
    }
  });
});
;define("pilasbloques/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pipeAction.default;
    }
  });
});
;define("pilasbloques/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function get() {
      return _pipe.pipe;
    }
  });
});
;define("pilasbloques/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("pilasbloques/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function get() {
      return _previous.previous;
    }
  });
});
;define("pilasbloques/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function get() {
      return _queue.queue;
    }
  });
});
;define("pilasbloques/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function get() {
      return _range.range;
    }
  });
});
;define("pilasbloques/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _reduce.default;
    }
  });
});
;define("pilasbloques/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _rejectBy.default;
    }
  });
});
;define("pilasbloques/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function get() {
      return _repeat.repeat;
    }
  });
});
;define("pilasbloques/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _reverse.default;
    }
  });
});
;define("pilasbloques/helpers/route-action", ["exports", "ember-route-action-helper/helpers/route-action"], function (_exports, _routeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _routeAction.default;
    }
  });
});
;define("pilasbloques/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function get() {
      return _shuffle.shuffle;
    }
  });
});
;define("pilasbloques/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("pilasbloques/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _slice.default;
    }
  });
});
;define("pilasbloques/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _sortBy.default;
    }
  });
});
;define("pilasbloques/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _take.default;
    }
  });
});
;define("pilasbloques/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _toggleAction.default;
    }
  });
});
;define("pilasbloques/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function get() {
      return _toggle.toggle;
    }
  });
});
;define("pilasbloques/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _union.default;
    }
  });
});
;define("pilasbloques/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function get() {
      return _without.without;
    }
  });
});
;define("pilasbloques/initializers/add-modals-container", ["exports", "ember-modal-dialog/initializers/add-modals-container"], function (_exports, _addModalsContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
  _exports.default = _default;
});
;define("pilasbloques/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "pilasbloques/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("pilasbloques/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
  _exports.default = _default;
});
;define("pilasbloques/initializers/ember-cli-mirage", ["exports", "pilasbloques/config/environment", "pilasbloques/mirage/config", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.startMirage = startMirage;
  _exports.default = void 0;
  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, {
          instantiate: false
        });
      }

      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  _exports.default = _default;

  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;
    return (0, _startMirage.default)(null, {
      env: env,
      baseConfig: _config.default,
      testConfig: _config.testConfig
    });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }

    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }

    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';

    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }
  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */


  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
});
;define("pilasbloques/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("pilasbloques/initializers/ember-responsive-breakpoints", ["exports", "ember-responsive/initializers/responsive"], function (_exports, _responsive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _responsive.default;
  _exports.default = _default;
});
;define("pilasbloques/initializers/ember-responsive", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'responsive',
    initialize: function initialize(application) {
      application.inject('controller', 'media', 'service:media');
      application.inject('component', 'media', 'service:media');
    }
  };
  _exports.default = _default;
});
;define("pilasbloques/initializers/export-application-global", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("pilasbloques/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define("pilasbloques/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("pilasbloques/mirage/config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  /*jshint esversion: 6 */
  function _default() {
    this.get('/desafios');
    this.get('/desafios/:id');
    this.get('/grupos');
    this.get('/grupos/:id');
    this.get('/libros');
    this.get('/libros/:id'); // Deshabilita los console log que emite mirage.

    this.logging = false; // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced

    this.timing = 50; // delay for each request, automatically set to 0 during testing

    this.passthrough('http://www.google-analytics.com/**');
    this.passthrough('http://104.131.245.133:9914/**');
    this.passthrough('http://api.pilasbloques.program.ar/**');
    this.passthrough('https://api.github.com/**');
    this.passthrough('http://testing-pilas-bloques-api.enjambrelab.com.ar/**');
    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
    */
  }
});
;define("pilasbloques/mirage/fixtures/desafios", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * Una actividad se define con el siguiente diccionario:
   * id: <obligatorio> Es el número por el cual se accederá al desafío en la URL.
   * nombre: <obligatorio> Es un segundo identificador único. Se usa para cosas como para chequear que la solución cargada sea de este desafío y no otro.
   * título: <obligatorio> Es el título visible del desafío en la lista del libro y en la pantalla principal del desafío.
   * enunciado: <obligatorio> Es el enunciado del desafío. Es la descripción del objetivo del programa que debe realizar el alumno.
   * consignaInicial: Es una posible pista, el "Sabías qué". En general en Pilas Bloques suele aparecer cuando el desafío introduce un concepto nuevo.
   * escena: <obligatorio> Es un String que puede indicar o bien un nombre de clase, o bien EL STRING con un "new Escena..." que luego se PARSEARÁ como javascript para construir la escena de ejerciciosPilas asociada a este desafío.
   * debeFelicitarse: Es un booleano que indica si tiene sentido que el desafío chequee e informe al alumno la concreción exitosa de su programa. En una actividad de dibujo libre estaría en false.
   * bloques: <obligatorio> Es la lista de ids de bloque de Blockly que habrá en el toolbox de la actividad.
   * estiloToolbox: Tiene tres valores: 
   * * * "sinCategorias", lo que hace un toolbox aplanado, con los bloques directamente en el toolbox sin títulos ni clasificaciones. 
   * * * "desplegable", lo que hace un toolbox con categorías que al clickearlas muestra los bloques. Es el valor por defecto.
   * * * "aplanado", produce el mismo toolbox aplanado con los bloques visibles que "sinCategorias", pero con las categorías en labels. Al momento está sin implementar.
   */

  /*jshint esversion: 6 */
  var _default = [{
    id: 1,
    nombre: 'AlienTocaBoton',
    titulo: 'Чужинець натискує кнопку',
    enunciado: 'Допоможіть нашому прибульцю натиснути кнопку його лабораторії.\n'+'Підказка: перегляньте наявні дії. Вам доведеться рухатися кілька разів!',
    consignaInicial: 'Блоки дозволяють формувати послідовності дій для вирішення завдань, які ми пропонуємо в Pilas Bloques.',
    escena: 'AlienInicial',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'ApretarBoton']
  }, {
    id: 2,
    nombre: 'ElGatoEnLaCalle',
    // sale de 'id' en 'app/actividades/actividadElGatoEnLaCalle.js'
    titulo: 'Кіт на вулиці',
    // sale de 'nombre' en 'app/actividades/actividadElGatoEnLaCalle.js'
    enunciado: 'Змусьте кота пройти один крок, заснути, прокинутися, привітатися і повернутися на своє місце.',
    consignaInicial: 'Нові дії можна створити в процедурах, що визначають нові блоки, які включають інші дії.',
    escena: 'ElGatoEnLaCalle',
    debeFelicitarse: true,
    bloques: ['Saludar', 'Avanzar', 'Volver', 'AbrirOjos', 'CerrarOjos', 'Acostarse', 'Pararse', 'Soniar', 'Procedimiento']
  }, {
    id: 3,
    nombre: 'NoMeCansoDeSaltar',
    titulo: 'Не втомлююся стрибати',
    enunciado: 'Допоможіть коту побороти лінощі, стрибнувши 30 разів поспіль. Підказка: це можна вирішити менш ніж 30 блоками.',
    consignaInicial: 'Блок "Повторити" дозволяє обрати кількість разів, які потрібно повторити послідовність дій. Це називається "просте повторення".',
    escena: 'NoMeCansoDeSaltar',
    debeFelicitarse: true,
    bloques: ['SaltarHablando', 'Procedimiento', 'Repetir']
  }, {
    id: 4,
    nombre: 'ElMarcianoEnElDesierto',
    titulo: 'Чужинець у пустелі',
    enunciado: 'Гість з далекої планети загубився в пустелі і йому потрібно харчуватися улюбленою їжею: яблуками! Допоможіть йому досягти своєї мети. Підказка: Створіть процедуру (блок) для кожного набору яблук',
    consignaInicial: 'Є багато способів їсти яблука. Ви можете почати з тих, що праворуч, або можна почати вгорі! Чи можете ви придумаєте іншу стратегію? Завжди продумайте перед програмуванням',
    escena: 'ElMarcianoEnElDesierto',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'ComerManzana', 'Procedimiento', 'Repetir']
  }, {
    id: 5,
    nombre: 'TitoEnciendeLuces',
    titulo: 'Тіто вмикає вогні',
    enunciado: 'Допоможіть Тіто увімкнути всі вогні.\n'+'Підказка: створіть процедуру для вмикання всіх індикаторів по діагоналі.',
    consignaInicial: 'Ви можете створити процедуру один раз і використовувати її стільки разів, скільки вам потрібно для виконання програми.',
    escena: 'TitoEnciendeLuces',
    debeFelicitarse: true,
    bloques: ['EncenderLuz', 'MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'Procedimiento', 'Repetir']
  }, {
    id: 6,
    nombre: 'ElAlienYLasTuercas',
    titulo: 'Чужинець і гайки',
    enunciado: 'Створіть програму для прибульця, щоб зібрати всі гайки. Підказка: Чи може іноземець рухатися по діагоналі? Ви можете створити власну процедуру для цього',
    escena: 'AlienLevantaTuercas',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'LevantaTuerca', 'Procedimiento', 'Repetir']
  }, {
    id: 7,
    nombre: 'ElRecolectorDeEstrellas',
    titulo: 'Збирач зірок',
    enunciado: 'Допоможіть нашому герою зібрати всі зірки. Підказка: ви можете зробити процедуру, щоб зібрати ряд зірок.',
    consignaInicial: 'Використання процедури багато разів економить вашу роботу.',
    escena: 'ElRecolectorDeEstrellas',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaArriba', 'VolverABordeIzquierdo', 'TomarEstrella', 'Procedimiento', 'Repetir']
  }, {
    id: 8,
    nombre: 'MariaLaComeSandias',
    titulo: 'Марія та кавуни',
    enunciado: 'Марії потрібно з’їсти всі кавуни в клітинках. Подумайте, як це можна зробити, створивши необхідні блоки. Підказка: спосіб розподілу кавунів у клютинках є ключовим для створення мінімальної кількості процедур.',
    escena: 'MariaLaComeSandias',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'MorderSandia', 'Procedimiento', 'Repetir']
  }, {
    id: 9,
    nombre: 'AlimentandoALosPeces',
    titulo: 'Годування риби',
    enunciado: 'Наш водолаз повинен нагодувати дощовими черв\'яками 7 риб. Спочатку шукайте черв\'яків, а потім починайте кожне годування риби. Підказка: Скільки частин має мати ваша стратегія?',
    consignaInicial: '123',
    escena: 'AlimentandoALosPeces',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'AlimentarPez', 'AgarrarComida', 'Procedimiento', 'Repetir']
  }, {
    id: 10,
    nombre: 'InstalandoJuegos',
    titulo: 'Встановлення ігор',
    enunciado: 'Ромчик повинен встановити гру на 3 комп\'ютери, щоб розважитися зі своїми друзями. Етапи, щоб встановити її в кожному з них: включити його, ввести пароль ("ABC"), встановити гру та вимкнути комп\'ютер. Підказка: скористайтеся тим, що на кожному комп’ютері ви повинні виконувати ту саму роботу.',
    escena: 'InstalandoJuegos',
    debeFelicitarse: true,
    bloques: ['PasarASiguienteComputadora', 'PrenderComputadora', 'ApagarComputadora', 'EscribirC', 'EscribirB', 'EscribirA', 'InstalarJuego', 'Repetir', 'Procedimiento']
  }, {
    id: 11,
    nombre: 'LaGranAventuraDelMarEncantado',
    titulo: 'Велика пригода біля зачарованого моря',
    enunciado: 'Допоможіть героїні врятувати свого принца. Для цього необхідно зробити кожен із наступних кроків:\n'+'1)Знайдіть ключ.\n'+'2)Відкрийте скриню ключем і візьміть чарівну шапку.\n'+'3)Віддайте шапку чарівнику, щоб отримати меч взамін.\n'+'4)Боріться з мечем проти темного лицаря.\n'+'5)Втікайте на єдинорозі.',
    escena: 'LaGranAventuraDelMarEncantado',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'AgarrarLlave', 'AbrirCofre', 'DarSombrero', 'AtacarConEspada', 'EscaparEnUnicornio', 'Repetir', 'Procedimiento']
  }, {
    id: 12,
    nombre: 'ReparandoLaNave',
    titulo: 'Ремонт корабля',
    enunciado: 'Прибулець повинен полагодити свій корабель, щоб повернутися додому. Щоб досягти цього, ви повинні принести на корабель 3 шматки вугілля і 3 - заліза, але ви не можете завантажувати більше одного шматка  одночасно.',
    escena: 'ReparandoLaNave',
    debeFelicitarse: true,
    bloques: ['MoverACasillaDerecha', 'MoverACasillaIzquierda', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'TomarHierro', 'TomarCarbon', 'Depositar', 'Escapar', 'Repetir', 'Procedimiento']
  }, {
    id: 13,
    nombre: 'ElMonoYLasBananas',
    titulo: 'Мавпа і банани',
    enunciado: 'Чи можете ви примусити мавпу просунутися до шафки?'+'Якщо є банан, його слід з\'їсти. Якщо ні, то мавпа щаслива лише проїхати.\n'+' Запустіть програму кілька разів, щоб переконатися, що вона завжди працює.\n'+' Підказка: подивіться категорії "Датчики" та "Перевірка умов".',
    consignaInicial: 'Блок "Якщо ... Інакше" виконує послідовність інструкцій лише тоді, коли умова справдиться. Це називається "умовний оператор"..',
    escena: 'ElMonoYLasBananas',
    debeFelicitarse: true,
    bloques: ['ComerBanana', 'AvanzarMono', 'TocandoBanana', 'Repetir', 'Procedimiento', 'Si']
  }, {
    id: 14,
    nombre: 'LaEleccionDelMono',
    titulo: 'Вибір мавпи',
    enunciado: 'Чи можете ви знову допомогти нашій мавпі? Цього разу їй слід'+'з\'їсти фрукти, які з\'являються - або банан, або яблуко.\n'+'Запустіть програму кілька разів, щоб переконатися, що вона завжди працює.\n'+' Підказка: цього разу недостатньо блоку "Якщо".',
    consignaInicial: 'Коли є лише два варіанти, просто задайте одне запитання. У цих випадках ви можете використовувати блок "Якщо...то".',
    escena: 'LaEleccionDelMono',
    debeFelicitarse: true,
    bloques: ['ComerBanana', 'ComerManzana', 'AvanzarMono', 'Procedimiento', 'Repetir', 'Si', 'SiNo', 'TocandoManzana', 'TocandoBanana']
  }, {
    id: 15,
    nombre: 'LaberintoCorto',
    titulo: 'Короткий лабіринт',
    enunciado: 'Проведіть мишу до потрібної мети. Щоб досягти цього, потрібно заздалегідь встановити рух у напрямку, вказаному стрілкою. Підказка: подивіться у категорії «Датчики», які питання ви можете задати.',
    escena: 'LaberintoCorto',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'Repetir', 'Si', 'SiNo', 'MoverACasillaDerecha', 'MoverACasillaAbajo', 'TocandoAbajo', 'TocandoDerecha']
  }, {
    id: 16,
    nombre: 'TresNaranjas',
    titulo: 'Три апельсини',
    enunciado: 'Іншопланетянин повинен з\'їсти всі шматочки апельсинів, які з\'являються у фіолетових коробках. Але вони не завжди з’являються в одних і тих же місцях або однаковій кількості! Підказка: спочатку подумайте, як би ви створили процедуру, щоб з\'їсти один апельсин, якщо такий є.',
    escena: 'TresNaranjas',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaDerecha', 'ComerNaranja', 'Repetir', 'Si', 'SiNo', 'TocandoNaranja']
  }, {
    id: 17,
    nombre: 'TitoRecargado',
    titulo: 'Тіто перезавантажили',
    enunciado: 'Тіто потрібно увімкнути вогні, щоб знати шлях... Але при кожному виконанні вони міняються місцями! Можна використовувати процедури та блоки керування.',
    escena: 'TitoRecargado',
    debeFelicitarse: true,
    bloques: ['EncenderLuz', 'MoverACasillaAbajo', 'Procedimiento', 'Repetir', 'Si', 'SiNo', 'TocandoLuz']
  }, {
    id: 18,
    nombre: 'LaberintoLargo',
    titulo: 'Довгий лабіринт',
    enunciado: 'Допоможіть миші вийти з лабіринту. На відміну від попереднього лабіринту, тут велика кількість квадратів, які необхідно пройти. Скільки їх? І це не завжди те ж саме. Підказка: Спочатку подумайте, як пройти один квадрат.',
    escena: 'LaberintoLargo',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaDerecha', 'MoverACasillaAbajo', 'Repetir', 'Si', 'SiNo', 'TocandoAbajo', 'TocandoDerecha']
  }, {
    id: 19,
    nombre: 'SuperTito1',
    titulo: 'СуперТіто 1 ',
    enunciado: ' Допоможіть Тіто увімкнути світло.\n Отакої - у кожній клітинці є лампочки, але ви не знаєте, скільки клітинок у кожному циклі.',
    consignaInicial: 'Існують нові блоки, які допоможуть вам вирішити це завдання дуже легко. Скористайтеся ними!',
    escena: 'SuperTito1',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'EncenderLuz', 'MoverACasillaAbajo', 'TocandoFinal', 'Repetir', 'Si', 'SiNo', 'Hasta']
  }, {
    id: 20,
    nombre: 'SuperTito2',
    titulo: 'СуперТіто 2',
    enunciado: 'СуперТіто повинен увімкнути всі лампочки, але на відміну від попереднього виклику, є клітинки без лампочок. Чи можете ви використовувати ту саму процедуру, що і в СуперТіто 1?\n',
    consignaInicial: 'Блок "повторити до" повторює послідовність дій, поки умова не буде виконана. Це називається "умовне повторення".',
    escena: 'SuperTito2',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'TocandoFinal', 'TocandoLuz', 'EncenderLuz', 'MoverACasillaAbajo', 'Repetir', 'Si', 'SiNo', 'Hasta']
  }, {
    id: 21,
    nombre: 'LaberintoConQueso',
    titulo: 'Лабіринт з сиром',
    enunciado: 'Миша голодніша, ніж будь-коли! Проведіть її по лабіринту, щоб вона з\'їла усі шматочки сиру. Підказка: Перш ніж почати, кілька разів натисніть кнопку Запустити, щоб дізнатися, як змінюється сценарій.',
    consignaInicial: 'Важливо подумати, чи виконається умова блоку "Повторити до чого" в якийсь момент. В іншому випадку програма може ніколи не закінчитися!',
    escena: 'LaberintoConQueso',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaDerecha', 'MoverACasillaAbajo', 'ComerQueso', 'Repetir', 'Si', 'SiNo', 'Hasta', 'TocandoAbajo', 'TocandoDerecha', 'TocandoFinCamino', 'TocandoQueso']
  }, {
    id: 22,
    nombre: 'ElDetectiveChaparro',
    titulo: 'Детектив Чапаро',
    enunciado: 'Детектив повинен виявити винуватця злочину. Починаючи з першого зліва, допитуйте кожного з підозрюваних, поки не знайдете винуватця!',
    consignaInicial: 'Блок "Повторити, поки" дозволяє нам закінчити програму, коли ми знайдемо винуватця, не потребуючи допиту всіх підозрюваних.',
    escena: 'ElDetectiveChaparro',
    debeFelicitarse: true,
    bloques: ['Repetir', 'Si', 'SiNo', 'Hasta', 'Procedimiento', 'IrAlPrimerSospechoso', 'IrAlSiguienteSospechoso', 'InterrogarSospechoso', 'EsCulpable']
  }, {
    id: 23,
    nombre: 'FutbolRobots',
    titulo: 'Футбол для роботів',
    enunciado: '"Допоможіть нашому футбольному роботові вибити всі м\'ячі.'+'Завжди пам\’ятайте, що хороший розподіл у процедурах може допомогти вам краще впоратися з проблемою' +'.',
    consignaInicial: 'Визначена процедура повинна враховувати змінний сценарій та пропонувати рішення з невеликою кількістю блоків. Важливо зазначити, що дія повторюється кілька разів і що довжина рядків змінюється.',
    escena: 'FutbolRobots',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaDerecha', 'MoverACasillaIzquierda', 'SiguienteFila', 'PatearPelota', 'TocandoInicio', 'TocandoPelota', 'Repetir', 'Si', 'SiNo', 'Hasta']
  }, {
    id: 24,
    nombre: 'PrendiendoLasCompus',
    titulo: 'Увімкнути комп\'ютери',
    enunciado: 'Ми повинні увімкнути усі комп\'ютери, враховуючи, що ширина та висота сцени змінюються з кожним виконанням. Підказка: Подумайте, як би ви зробили, щоб увімкнути комп\'ютери з одного боку прямокутника, а потім повторити для решти сторін.',
    escena: 'PrendiendoLasCompus',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'Repetir', 'Si', 'SiNo', 'Hasta', 'MoverACasillaDerecha', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'MoverACasillaIzquierda', 'PrenderComputadora', 'EstoyEnEsquina']
  }, {
    id: 25,
    nombre: 'ElMonoQueSabeContar',
    titulo: 'Мавпа, яка вміє рахувати',
    enunciado: 'Мавпа повинна пройти всі клітинки і порахувати, скільки всього є бананів і яблук. Підказка: спочатку подумайте, як би ви визначили, чи є яблуко чи банан у даній клітинці. Тоді подумайте, як би ви зробили, щоб порахувати всі плоди в одному стовпчику. ',
    consignaInicial: 'Поділ великої проблеми на менші проблеми допомагає краще зрозуміти кожну частину, яка її складає. Це також дозволяє зосередитись на вирішенні більш простих питань, які складають початкову проблему.',
    escena: 'ElMonoQueSabeContar',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'SiguienteColumna', 'ContarBanana', 'ContarManzana', 'TocandoBanana', 'TocandoManzana', 'Repetir', 'Si', 'SiNo', 'Hasta', 'EstoySobreElInicio', 'EstoySobreElFinal']
  }, {
    id: 26,
    nombre: 'ElSuperviaje',
    titulo: 'Супергерой',
    enunciado: 'Наш супергерой повинен зробити свою суперранкову суперпрогулянку, яка складається з проходження певної кількості кілометрів, причому відстань щоденно змінюється(між 15 і 45 км). Допоможіть нашому супердругу завжди прибувати до місця призначення, не переходячи його! Підказка: подивіться у категорію "Датчики", чи є там щось, що може вам допомогти.',
    consignaInicial: 'Можна використовувати блок "Повторити" зі значенням датчика. Це дозволяє повторити послідовність коду кількість разів, яку вказує датчик',
    escena: 'SuperViaje',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'KmsTotales', 'Avanzar1km', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta']
  }, {
    id: 27,
    nombre: 'ElMonoCuentaDeNuevo',
    titulo: 'Мавпа рахує ще раз',
    enunciado: 'Мавпа повинна знову порахувати плоди, але тепер вона не може перевірити, чи вже досягла кінця стовпця! Чи є якийсь датчик, який може вам допомогти?',
    consignaInicial: 'Датчик дозволяє нам отримувати інформацію, яка може змінюватися в кожному виконанні програми, навіть в одному виконанні. Наприклад, довжина кожного стовпця змінюється залежно від того, на якому стовпчику стоїть мавпа.',
    escena: 'ElMonoCuentaDeNuevo',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaArriba', 'MoverACasillaAbajo', 'SiguienteColumna', 'ContarBanana', 'ContarManzana', 'TocandoBanana', 'TocandoManzana', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'EstoySobreElInicio', 'LargoColumnaActual']
  }, {
    id: 28,
    nombre: 'ElPlanetaDeNano',
    titulo: 'Планета Нано',
    escena: 'ElPlanetaDeNano',
    enunciado: 'Допоможіть Нано з\'їсти всі банани. Остерігайтеся! Ви не можете зійти ... \n Зауважте, що банани завжди в тих самих місцях!',
    consignaInicial: 'Створеним блокам можуть бути додані параметри, щоб зробити їх більш загальними. Наприклад, якщо ми створимо процедури "Їжте 2 банани праворуч", "Їжте 3 банани праворуч" та "Їжте 4 банани праворуч", то ми можемо замінити всі три однією процедурою, яка отримує в якості параметра кількість бананів, які ми хочемо з\’їсти праворуч: «Їжте праворуч цю кількість: [кількість]».\n Щоб додати параметр до нової процедури, натисніть на плюсик біля пункту "Блок", а потім перетягніть блок "параметр" у потрібне місце.',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'MoverACasillaDerecha', 'MoverACasillaArriba', 'VolverAlBordeIzquierdo', 'ComerBanana', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'Numero']
  }, {
    id: 29,
    nombre: 'DibujandoAlCuadrado',
    titulo: 'Малюнок: квадрат',
    enunciado: 'Намалюйте квадрат, який має сторони розміром 100 одиниць.',
    consignaInicial: '',
    escena: 'DibujandoCuadrado',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero']
  }, {
    id: 30,
    nombre: 'DibujandoRayuelaRobotica',
    titulo: 'Малюнок: гра "класики" для робота',
    enunciado: 'Намалюйте 5 квадратів підряд, кожен зі стороною 50, як показано.',
    consignaInicial: '',
    escena: 'Dibujando5CuadradosHorizontal',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'SaltarHaciaAdelante']
  }, {
    id: 31,
    nombre: 'DibujandoCortoPorLaDiagonal',
    titulo: 'Малюнок: квадрати по діагоналі',
    enunciado: 'Намалюйте 5 квадратів по діагоналі, кожна сторона яких 50, як показано.',
    consignaInicial: '',
    escena: 'Dibujando5CuadradosDiagonal',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'SaltarHaciaAdelante']
  }, {
    id: 32,
    nombre: 'DibujandoMamushkaCuadrada',
    titulo: 'Малюнок: вкладені квадрати',
    enunciado: 'Намалюйте 4 квадрати сторін 50, 100, 150 і 200, як показано. Підказка: створіть нову процедуру для малювання квадратів зі стороною будь-якої довжини.',
    consignaInicial: 'Включення параметрів у процедури дозволяє узагальнити поняття. Наприклад, довжина сторони квадрата.',
    escena: 'Dibujando4CuadradosInteriores',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'SaltarHaciaAdelante']
  }, {
    id: 33,
    nombre: 'DibujandoEscaleraCuadrada',
    titulo: 'Малюнок: квадрат та сходи',
    enunciado: 'Намалюйте 5 квадратів: 4 із сторони 50 та один із 100, як показано.',
    consignaInicial: 'Під час створення процедури з параметрами її значення не визначають(наприклад, "бічна довжина"). Під час використання процедур цим параметрам необхідно задавати конкретне значення (50, 100 тощо)...',
    escena: 'DibujandoCabezaElefante',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'SaltarHaciaAdelante']
  }, {
    id: 34,
    nombre: 'DibujandoHexagono',
    titulo: 'Малюнок: шестикутник ',
    enunciado: 'Намалюйте шестикутник зі стороною 100, як показано. Підказка: подумайте, на скільки градусів повинен обертатися робот, знаючи, як визначаються внутрішні кути шестикутника.',
    consignaInicial: 'У багатокутниках значення зовнішнього кута дорівнює 180 мінус значення внутрішнього кута.',
    escena: 'DibujandoHexagono',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'OpAritmetica', 'SaltarHaciaAdelante']
  }, {
    id: 35,
    nombre: 'DibujandoPiramideInvertida',
    titulo: 'Малюнок: перевернута піраміда',
    enunciado: 'Намалюйте рівносторонній трикутник зі стороною 100, як показано. Підказка: подумайте, чи існує залежність між кутами та кількістю сторін.',
    consignaInicial: 'У багатокутниках сума всіх зовнішніх кутів дорівнює 360',
    escena: 'DibujandoTrianguloEquilatero',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'OpAritmetica', 'SaltarHaciaAdelante']
  }, {
    id: 36,
    nombre: 'DibujandoFigurasDentroDeFiguras',
    titulo: 'Малюнок: фігури всередині фігур',
    enunciado: 'Намалюйте трикутник, квадрат і п\'ятикутник зі стороною 100, як показано. Підказка: Створіть процедуру з параметром для кількості сторін. ',
    consignaInicial: 'Зараз у нас є "Оператори": ці блоки дозволять нам автоматично виконувати деякі обчислення. Як калькулятор!... Скільки градусів має повний оберт? На яке число ми повинні ділити його?',
    escena: 'DibujandoPoligonosInteriores',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'OpAritmetica', 'SaltarHaciaAdelante']
  }, {
    id: 37,
    nombre: 'DibujandoLaCuevaDeEstalagtitas',
    titulo: 'Малюнок: печера сталактитів',
    enunciado: 'Намалюйте 3 трикутники зі сторонами 40, 60 та 100 та квадрат стороною 200, як показано на затіненій фігурі. Підказка: створіть процедуру з двома параметрами, одна для кількості сторін і одна для довжини сторін.',
    consignaInicial: 'Для використання параметрів у новій процедурі потрібно клацнути правою кнопкою миші на блоці, який визначає цю процедуру.',
    escena: 'DibujandoCuevaEstalagtitas',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'DibujarLado', 'GirarGrados', 'Numero', 'OpAritmetica', 'SaltarHaciaAdelante']
  }, {
    id: 130,
    nombre: 'LaFiestaDeDracula',
    titulo: 'Вечірка Дракули',
    escena: 'LaFiestaDeDracula',
    enunciado: 'Для того, щоб розпочати вечірку Дракули, ми повинні змінити колір 3-х ліхтарів певну кількість разів: 5 разів перший, 8 - другий та 12 - третій.',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'Numero', 'OpAritmetica', 'CambiarColor', 'SiguienteFoco', 'EmpezarFiesta']
  }, {
    id: 131,
    nombre: 'SalvandoLaNavidad',
    titulo: 'Врятуймо Різдво!',
    escena: 'SalvandoLaNavidad',
    enunciado: 'Допоможіть Санті залишити подарунок у кінці кожного ряду. Майте на увазі, що сценарій не змінюється від одного виконання до іншого! Підказка: якби вам довелося вибрати параметр для вашої процедури - який із них ви обрали б? Що залежить від рядка до рядка?',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'MoverACasillaDerecha', 'DejarRegalo', 'SiguienteFilaTotal', 'Numero', 'OpAritmetica']
  }, {
    id: 132,
    nombre: 'PrendiendoLasCompusParametrizado',
    titulo: 'Вмикаємо комп\'ютери з параметром',
    escena: 'PrendiendoLasCompus',
    enunciado: 'Як і раніше, ми повинні увімкнутии всі комп\'ютери. Але цього разу вам доведеться визначити єдину процедуру, за допомогою якої можна виконати усі необхідні дії.',
    consignaInicial: 'Параметри не завжди повинні бути числами. Наприклад, параметром може бути напрямок, в якому повинен рухатися персонаж.',
    deshabilitado: false,
    debeFelicitarse: true,
    bloques: ['ParaLaDerecha', 'ParaLaIzquierda', 'ParaArriba', 'ParaAbajo', 'MoverA', 'Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'PrenderComputadora', 'EstoyEnEsquina', 'Numero', 'OpAritmetica']
  }, {
    id: 133,
    nombre: 'TitoCuadrado',
    titulo: 'Тіто в квадраті',
    escena: 'TitoCuadrado',
    enunciado: 'Тіто повинен увімкнути всі лампочки на квадраті, але при кожному виконанні вони розподіляються по різному. Майте на увазі, що кутові клітинки ніколи не використовуються і що розмір квадрата не змінюється від одного виконання до іншого.',
    debeFelicitarse: true,
    bloques: ['ParaLaDerecha', 'ParaLaIzquierda', 'ParaArriba', 'ParaAbajo', 'MoverA', 'Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'TocandoLuz', 'EncenderLuz', 'Numero', 'OpAritmetica']
  }, {
    id: 134,
    nombre: 'ElCangrejoAguafiestas',
    titulo: 'Капосний краб',
    escena: 'ElCangrejoAguafiestas',
    enunciado: 'Краб хоче попсувати всі кульки на вечірці. Майте на увазі, що вони не міняють місця. Підказка: чи можуть бути кількість кульок і їх місця параметром?',
    consignaInicial: 'Можна поєднувати числові параметри(кількості, довжини) з текстовими параметрами(адреси, імена).',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'ParaLaDerecha', 'ParaLaIzquierda', 'ParaArriba', 'ParaAbajo', 'MoverA', 'ExplotarGlobo', 'Numero', 'OpAritmetica']
  }, {
    id: 135,
    nombre: 'PrendiendoLasFogatas',
    titulo: 'Розкладемо багаття',
    escena: 'PrendiendoLasFogatas',
    enunciado: 'У цій вправі ви повинні рокласти всі багаття, але в кожному виконанні вони розподіляються по-різному. Майте на увазі, що кутові клітинки ніколи не використовуються і що розмір квадрата не змінюється від одного виконання до іншого.',
    consignaInicial: 'Якщо у вас немає процедури з параметрами для переміщення в будь-якому напрямку... Ви можете створити її!',
    debeFelicitarse: true,
    bloques: ['Procedimiento', 'RepetirVacio', 'Repetir', 'Si', 'SiNo', 'Hasta', 'TocandoFogata', 'PrenderFogata', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'Numero', 'OpComparacion', 'OpAritmetica', 'ParaLaDerecha', 'ParaLaIzquierda', 'ParaArriba', 'ParaAbajo']
  }, {
    id: 136,
    nombre: 'DibujoLibre',
    titulo: 'Намалюйте власні фантазії!',
    imagen: 'DibujoLibre',
    escena: "new DibujandoLibremente()",
    enunciado: 'У цій вправі ви зможете створити малюнок, який вам найбільше подобається',
    consignaInicial: 'Ми включаємо всі можливі блоки, щоб ви могли показати свої навички.',
    debeFelicitarse: false,
    bloques: ['Procedimiento', 'Repetir', 'DibujarLado', 'GirarGrados', 'Numero', 'OpAritmetica', 'SaltarHaciaAdelante']
  }, {
    id: 201,
    nombre: '3.1.2a',
    titulo: 'Завдання 1',
    escena: "new EscenaDuba(\"      [O,O,O,O,O,O],      [O,-,-,-,O,-],      [-,A,-,-,P,-],      [-,-,-,O,-,-],      [O,O,O,O,-,O],\t\t\")",
    enunciado: 'Допоможіть котику з\'їсти його м\'ясце. Уникайте перешкод.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco']
  }, {
    id: 202,
    nombre: '3.1.2b',
    titulo: 'Завдання 2',
    escena: "new EscenaDuba(\"        [O,O,O,O,O,O],        [O,O,O,O,O,O],        [O,-,O,-,P,O],        [O,-,A,-,O,O],        [O,O,-,O,O,O],        [O,O,O,O,O,O],\t\t\")",
    enunciado: 'Котик Дуба шукає свій обід. Допомагайте!',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco']
  }, {
    id: 203,
    nombre: '3.1.2c',
    titulo: 'Завдання 3',
    escena: "new EscenaDuba(\"      [O,O,O,O,O,O],      [O,O,O,O,O,O],      [O,A,O,-,-,O],      [O,-,-,-,P,O],      [O,-,O,-,-,O],      [O,O,O,O,O,O],\t\t\")",
    enunciado: 'Чи допоможете Дубі знайти його обід? Уникайте перешкод.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco']
  }, {
    id: 204,
    nombre: '3.1.2d',
    titulo: 'Завдання 4',
    escena: "new EscenaDuba(\"      [O,O,O,O,O,O],      [O,-,A,O,O,O],      [O,O,-,O,O,O],      [O,O,-,-,-,O],      [O,O,O,P,-,O],      [O,O,O,O,O,O],\t\t\")",
    enunciado: 'Котик Дуба хоче пообідати. Як можна це зробити, не натрапляючи на перешкоди?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco']
  }, {
    id: 205,
    nombre: '3.1.2e',
    titulo: 'Завдання 5',
    escena: "new EscenaDuba(\"      [O,O,O,O,O,O],      [O,O,-,O,-,O],      [O,-,A,-,-,O],      [O,-,-,O,-,O],      [O,O,-,-,P,O],      [O,O,O,O,O,O],\t\t\")",
    enunciado: 'Допоможіть котику Дубі втамувати голод, уникаючи перешкод.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco']
  }, {
    id: 206,
    nombre: '3.1.2f',
    titulo: 'Завдання 6',
    escena: "new EscenaDuba(\"      [O,O,O,O,O,O],      [O,-,-,-,-,O],      [O,-,O,P,-,O],      [O,A,O,-,O,O],      [O,O,O,O,O,O],      [O,O,O,O,O,O],\t\t\")",
    enunciado: 'Дуба хоче м\'ясця. Як ти можеш йому допомогти?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco']
  }, {
    id: 207,
    nombre: '3.1.3a',
    titulo: 'Завдання 1',
    escena: "new EscenaCoty(\n      [{x:125,y:75},{x:125,y:-175},{x:-25,y:-175},{x:-25,y:-75},{x:25,y:-75},{x:25,y:-175},{x:-125,y:-175},{x:-125,y:125},{x:-75,y:125},{x:-75,y:75},{x:-25,y:75},{x:-25,y:125},{x:25,y:125},{x:25,y:75}],\n      [{x:25,y:75},{x:75,y:75},{x:75,y:125},{x:125,y:125},{x:125,y:75}],\n      {xCoty: 25, yCoty: 75}\n    )",
    enunciado: 'Допоможіть Коті завершити малювати вежу.',
    consignaInicial: 'Щоб завершити малюнок, Коті повинна замалювати сірі лінії.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando']
  }, {
    id: 208,
    nombre: '3.1.3b',
    titulo: 'Завдання 2',
    escena: "new EscenaCoty(\n      [{x:-50,y:25},{x:0,y:100},{x:50,y:25}],\n      [{x:-50,y:25},{x:0,y:25},{x:50,y:25},{x:50,y:-25},{x:50,y:-75},{x:0,y:-75},{x:-50,y:-75},{x:-50,y:-25},{x:-50,y:25}],\n      {xCoty: -50, yCoty: 25}\n    )",
    enunciado: 'Коті хоче намалювати будинок. Ви допоможете?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando']
  }, {
    id: 209,
    nombre: '3.1.3c',
    titulo: 'Завдання 3',
    escena: "new EscenaCoty(\n      [],\n      [[ {x:-125,y:0}, {x:-75,y:0}],[ {x:-25,y:0}, {x:25,y:0}],[ {x:75,y:0}, {x:125,y:0}]],\n      {xCoty: 125, yCoty: 0}\n    )",
    enunciado: 'Коті хоче лише намалювати три смужки. Як вона може це зробити?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda']
  }, {
    id: 210,
    nombre: '3.1.3d',
    titulo: 'Завдання 4',
    escena: "new EscenaCotySonrisa()",
    enunciado: 'Чи допоможете ви Коті завершити малюнок обличчя?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda']
  }, {
    id: 211,
    nombre: '3.1.3e',
    titulo: 'Завдання 5',
    escena: "new EscenaCoty(\n      [[{x:-55,y:50},{x:-150,y:50},{x:-150,y:0},{x:-50,y:0}],[{x:-75,y:0},{x:-75,y:-100},{x:-125,y:-100},{x:-125,y:0}],[{x:-25,y:0},{x:25,y:0},{x:25,y:-100},{x:-25,y:-100},{x:-25,y:0}],[{x:125,y:0},{x:125,y:-100},{x:75,y:-100},{x:75,y:0}],[{x:50,y:0},{x:150,y:0},{x:150,y:50},{x:50,y:50}]],\n      [{x:-50,y:0},{x:0,y:0},{x:50,y:0},{x:50,y:50},{x:0,y:50},{x:-50,y:50},{x:-50,y:0}],\n      {xCoty: -50, yCoty: 100}      \n    )",
    enunciado: 'Як можна допомогти Коті закінчити малювати міст?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda']
  }, {
    id: 212,
    nombre: '3.1.3f',
    titulo: 'Завдання 6',
    escena: "new EscenaCotyCactus()",
    enunciado: 'Як можна допомогти Коті закінчити малювати кактус?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda']
  }, {
    id: 213,
    nombre: '3.1.3g',
    titulo: 'Завдання 7',
    escena: "new EscenaCotyMate()",
    enunciado: 'Допоможіть Коті закінчити малюнок.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda']
  }, {
    id: 214,
    nombre: '3.1.4a',
    titulo: 'Завдання 1',
    escena: "new EscenaLita(\"      [O,O,O,O,O,O],      [O,O,O,O,O,O],      [O,A,-,T,L,-],      [O,O,O,O,O,E],      [O,O,O,O,O,O],      [O,O,O,O,O,O]    \")",
    enunciado: 'Допоможіть Літі приготувати салат з різних овочів.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 215,
    nombre: '3.1.4b',
    titulo: 'Завдання 2',
    escena: "new EscenaLita(\"      [O,O,O,O,O],      [O,O,O,O,O],      [-,-,T,-,-],      [-,-,L,-,-],      [A,O,O,O,E],      [O,O,O,O,O]    \")",
    enunciado: 'Сьогодні Літа хоче їсти салат. Допоможіть їй приготувати його!',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 216,
    nombre: '3.2.2a',
    titulo: 'Завдання 1',
    escena: "new EscenaLita(\"      [-,-,-],      [-,L,-],      [A,-,E],      [-,T,-]    \")",
    enunciado: 'Томати, салат і трішки кмітливості. Допоможіть Літі приготувати обід.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 217,
    nombre: '3.2.2b',
    titulo: 'Завдання 2',
    escena: "new EscenaLita(\"      [-,-,-,-],      [-,L,T,-],      [A,-,-,E],      [-,-,-,-]    \")",
    enunciado: 'Допоможіть Літі приготувати улюблену страву.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 218,
    nombre: '3.2.2c',
    titulo: 'Завдання 3',
    escena: "new EscenaLita(\"      [-,A,-],      [L,E,T],      [-,-,-],      [-,-,-]    \")",
    enunciado: 'Ви спочатку візьмете томат чи салат? Допоможіть Літі у приготуванні страви.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 219,
    nombre: '3.2.2d',
    titulo: 'Завдання 4',
    escena: "new EscenaLita(\"      [-,-,A],      [-,L,T],      [-,-,E]    \")",
    enunciado: 'Які кроки необхідно зробити для приготування улюбленої страви?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 220,
    nombre: '3.2.3a',
    titulo: 'Завдання 1',
    escena: "new EscenaDuba(\"      [O,O,O,O,O,O],      [O,P,O,-,-,O],      [O,-,O,-,-,-],      [O,-,-,-,O,A],      [O,O,O,O,O,O],      [O,O,O,O,O,O],\t\t\")",
    enunciado: 'У чому полягає помилка у рішенні проблеми? Знайдіть її та допоможіть Дубі з\'їсти його обід.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco'],
    debugging: true,
    solucionInicial: "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n    <block type=\"al_empezar_a_ejecutar\" id=\"1\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">\n    <statement name=\"program\">\n      <block type=\"MoverACasillaArriba\">\n      <next>\n      <block type=\"MoverACasillaIzquierda\">\n      <next>\n      <block type=\"MoverACasillaIzquierda\">\n      <next>\n      <block type=\"MoverACasillaAbajo\">\n      <next>\n      <block type=\"MoverACasillaIzquierda\">\n      <next>\n      <block type=\"MoverACasillaArriba\">\n      <next>\n      <block type=\"MoverACasillaArriba\">\n      <next>\n      <block type=\"ComerChurrasco\">\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n    </statement>\n    </block>\n  </xml>"
  }, {
    id: 221,
    nombre: '3.2.3b',
    titulo: 'Завдання 2',
    escena: "new EscenaDuba(\"        [O,O,O,O,O,O],        [O,-,-,O,O,O],        [O,-,P,O,O,O],        [O,-,-,O,O,O],        [O,-,-,-,A,O],        [O,O,O,O,O,O],\t\t\")",
    enunciado: 'Що це з котом Дубою, який не може їсти їжу? Виправивте програму, щоб кіт втамував свій голод.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco'],
    debugging: true,
    solucionInicial: "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n    <block type=\"al_empezar_a_ejecutar\" id=\"1\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">\n    <statement name=\"program\">\n      <block type=\"MoverACasillaIzquierda\">\n      <next>\n      <block type=\"MoverACasillaArriba\">\n      <next>\n      <block type=\"MoverACasillaArriba\">\n      <next>\n      <block type=\"ComerChurrasco\">\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n    </statement>\n    </block>\n  </xml>"
  }, {
    id: 222,
    nombre: '3.2.3c',
    titulo: 'Завдання 3',
    escena: "new EscenaDuba(\"        [O,O,O,O,O,O],        [O,P,O,A,O,O],        [O,-,O,-,O,O],        [O,-,-,-,O,O],        [O,-,-,O,O,O],        [O,O,O,O,O,O],\t\t\")",
    enunciado: 'Відшукайте помилки в програмі та виправте їх, щоб Дуба міг смачно пообідати.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco'],
    debugging: true,
    solucionInicial: "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n    <block type=\"al_empezar_a_ejecutar\" id=\"1\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">\n    <statement name=\"program\">\n      <block type=\"MoverACasillaAbajo\">\n      <next>\n      <block type=\"MoverACasillaAbajo\">\n      <next>\n      <block type=\"MoverACasillaIzquierda\">\n      <next>\n      <block type=\"MoverACasillaArriba\">\n      <next>\n      <block type=\"ComerChurrasco\">\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n    </statement>\n    </block>\n  </xml>"
  }, {
    id: 223,
    nombre: '3.2.3d',
    titulo: 'Завдання 4',
    escena: "new EscenaDuba(\"        [O,O,O,O,O,O],        [O,O,-,-,-,O],        [O,-,P,-,-,O],        [O,-,O,O,O,O],        [O,-,-,A,-,O],        [O,O,O,O,O,O],\t\t\")",
    enunciado: 'Тут є якісь зайві або відсутні інструкції? Подивіться програму, виявіть помилку і допоможіть Дубі з\'їсти його улюблену страву.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco'],
    debugging: true,
    solucionInicial: "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n    <block type=\"al_empezar_a_ejecutar\" id=\"1\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">\n    <statement name=\"program\">\n      <block type=\"MoverACasillaIzquierda\">\n      <next>\n      <block type=\"MoverACasillaIzquierda\">\n      <next>\n      <block type=\"MoverACasillaIzquierda\">\n      <next>\n      <block type=\"MoverACasillaArriba\">\n      <next>\n      <block type=\"MoverACasillaArriba\">\n      <next>\n      <block type=\"MoverACasillaDerecha\">\n      <next>\n      <block type=\"ComerChurrasco\">\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n    </statement>\n    </block>\n  </xml>"
  }, {
    id: 224,
    nombre: '3.2.3e',
    titulo: 'Завдання 5',
    escena: "new EscenaLita(\"      [O,O,O,O,O,O,O],      [O,O,O,O,O,O,O],      [O,O,O,O,-,T,O],      [O,A,-,-,L,E,O],      [O,O,O,O,O,O,O],      [O,O,O,O,O,O,O]    \")",
    debugging: true,
    solucionInicial: "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n      <block type=\"al_empezar_a_ejecutar\" id=\"1\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">\n      <statement name=\"program\">\n        <block type=\"MoverACasillaDerecha\">\n        <next>\n        <block type=\"MoverACasillaDerecha\">\n        <next>\n        <block type=\"MoverACasillaDerecha\">\n        <next>\n        <block type=\"AgarrarLechuga\">\n        <next>\n        <block type=\"MoverACasillaArriba\">\n        <next>\n        <block type=\"MoverACasillaDerecha\">\n        <next>\n        <block type=\"MoverACasillaAbajo\">\n        <next>\n        <block type=\"PrepararEnsalada\">\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n      </statement>\n      </block>\n    </xml>",
    enunciado: 'Яку помилку ви знайдете в цій програмі? Виправте і допоможіть нашому герою приготувати свій обід.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada']
  }, {
    id: 225,
    nombre: '3.I1a',
    titulo: 'Завдання 1',
    escena: "new EscenaTotoLector([\n        ['A', 'r', 'e'],\n        ['t', 'o', 'j'],\n        ['i', 't', 'o'],\n    ], \"toto\")",
    enunciado: 'Допоможіть лисичці прочитати її ім\'я: TOTO.',
    consignaInicial: 'TOTO читає літери, через які рухається.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha']
  }, {
    id: 226,
    nombre: '3.I1b',
    titulo: 'Завдання 2',
    escena: "new EscenaTotoLector([\n        ['r', 'h', 'j', 'a'],\n        ['z', 'A', 'a', 'm'],\n        ['y', 'l', 'l', 'q']\n    ], \"llama\")",
    enunciado: 'Тото має гарного друга - Коті. Допоможіть їй прочитати слово LLAMA.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha']
  }, {
    id: 227,
    nombre: '3.I1c',
    titulo: 'Завдання 3',
    escena: "new EscenaTotoLector([\n        ['a', 'm', 'A'],\n        ['f', 'u', 'p'],\n        ['r', 'y', 'a'],\n    ], \"puma\")",
    enunciado: 'Вгадайте, про кого думає лисичка! Допомога: це тварина, яка любить їсти м\'ясо.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha']
  }, {
    id: 228,
    nombre: '3.I1d',
    titulo: 'Завдання 4',
    escena: "new EscenaTotoLector([\n        ['A', 'c', 'a', 'b'],\n        ['o', 'l', 'l', 'e'],\n    ], \"caballo\")",
    enunciado: 'Що хотіла прочитати лисиця і що вона, нарешті, прочитала? Знайдіть помилку і виправте її!',
    consignaInicial: 'Тото повертається. Це займе деякий час, тому що йде до ...',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha'],
    debugging: true,
    solucionInicial: "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n      <block type=\"al_empezar_a_ejecutar\" id=\"1\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">\n      <statement name=\"program\">\n        <block type=\"MoverLeyendoDerecha\">\n        <next>\n        <block type=\"MoverLeyendoDerecha\">\n        <next>\n        <block type=\"MoverLeyendoDerecha\">\n        <next>\n        <block type=\"MoverLeyendoAbajo\">\n        <next>\n        <block type=\"MoverLeyendoIzquierda\">\n        <next>\n        <block type=\"MoverLeyendoIzquierda\">\n        <next>\n        <block type=\"MoverLeyendoIzquierda\">\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n      </statement>\n      </block>\n    </xml>"
  }, {
    id: 229,
    nombre: '3.I1e',
    titulo: 'Завдання 5',
    escena: "new EscenaTotoLector([\n        ['w', 'a', 'r'],\n        ['u', 'n', 'e'],\n        ['l', 'A', 's'],\n    ], \"lunes\", 7)",
    enunciado: 'Тото замешкалась. Допоможіть їй правильно прочитати слово LUNES.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverLeyendoAbajo', 'MoverLeyendoArriba', 'MoverLeyendoIzquierda', 'MoverLeyendoDerecha'],
    debugging: true,
    solucionInicial: "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n      <block type=\"al_empezar_a_ejecutar\" id=\"1\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">\n      <statement name=\"program\">\n        <block type=\"MoverLeyendoIzquierda\">\n        <next>\n        <block type=\"MoverLeyendoArriba\">\n        <next>\n        <block type=\"MoverLeyendoDerecha\">\n        <next>\n        <block type=\"MoverLeyendoArriba\">\n        <next>\n        <block type=\"MoverLeyendoDerecha\">\n        <next>\n        <block type=\"MoverLeyendoAbajo\">\n        <next>\n        <block type=\"MoverLeyendoAbajo\">\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n      </statement>\n      </block>\n    </xml>"
  }, {
    id: 230,
    nombre: '4.1.3a',
    titulo: 'Завдання 1',
    escena: "new EscenaDuba(\"        [-,O,O,O,-,-,-,-],        [-,O,O,O,O,-,-,-],        [O,O,-,O,O,-,-,-],        [O,O,-,-,-,-,-,-],        [A,-,-,-,-,-,-,P],        [-,-,O,-,O,-,-,-],        [-,-,O,O,O,O,O,O],        [-,-,-,O,O,O,O,O],\t\t\")",
    enunciado: 'Чи може кіт досягти свого обіду, використавши лише один блок руху?',
    consignaInicial: 'Ви можете використати новий блок "Повторити"',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir']
  }, {
    id: 231,
    nombre: '4.1.3b',
    titulo: 'Завдання 2',
    escena: "new EscenaDuba(\"        [O,O,-,O,O,-,-,-],        [O,P,-,O,O,-,-,-],        [O,-,-,O,-,-,-,-],        [O,-,O,O,-,-,-,-],        [O,-,O,O,O,-,-,-],        [-,-,O,O,O,O,-,-],        [-,-,O,O,O,O,O,O],        [-,-,A,O,O,O,O,O],\t\t\")",
    enunciado: 'Кіт голодний і далеко від обіду. Але тепер він знає, як повторити дії!',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir']
  }, {
    id: 232,
    nombre: '4.1.3c',
    titulo: 'Завдання 3',
    escena: "new EscenaDuba(\"      [-,-,-,O,O,-,-,O],      [O,O,-,O,-,-,-,O],      [A,O,O,O,-,-,O,O],      [-,O,O,O,O,O,O,O],      [-,O,O,O,-,O,O,O],      [-,-,-,-,-,-,P,O],      [O,O,-,O,O,O,O,O],      [O,O,-,-,O,O,O,O],\t\t\")",
    enunciado: 'Що коту потрібно зробити, щоб дістатися до своєї їжі, не використовуючи багато блоків руху?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir']
  }, {
    id: 233,
    nombre: '4.1.4a',
    titulo: 'Завдання 1',
    escena: "new EscenaCoty(\n      [],\n      [[{x:-130,y:20},{x:-90,y:20}], [{x:-50,y:20},{x:-10,y:20}], [{x:30,y:20},{x:70,y:20}], [{x:110,y:20},{x:150,y:20}]],\n      {xCoty: -130, yCoty: 20, longitudSegmento: 40}     \n    )",
    enunciado: 'Коті хоче провести чотири лінії. Що повторюється цього разу?',
    consignaInicial: 'У "Повторенні" може бути більше одного блоку',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir']
  }, {
    id: 234,
    nombre: '4.1.4b',
    titulo: 'Завдання 2',
    escena: "new EscenaCoty(\n      [],\n      [[{x:-130,y:20},{x:-90,y:20}], [{x:-50,y:20},{x:-10,y:20}], [{x:30,y:20},{x:70,y:20}], [{x:110,y:20},{x:150,y:20},{x:150,y:-20}]],\n      {xCoty: -130, yCoty: 20, longitudSegmento: 40}      \n    )",
    enunciado: 'Тепер вам також доведеться малювати! Чи буде це так просто, додавши блок до того, що ви робили раніше? Скільки повторів потрібно зараз?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir']
  }, {
    id: 235,
    nombre: '4.1.4c',
    titulo: 'Завдання 3',
    escena: "new EscenaCoty(\n      [],\n      [[{x:-120,y:-60},{x:-120,y:-20},{x:-80,y:-20},{x:-40,y:-20},{x:-40,y:20},{x:0,y:20},{x:40,y:20},{x:40,y:60},{x:80,y:60},{x:120,y:60}]],\n      {xCoty: -120, yCoty: -60, longitudSegmento: 40}\n    )",
    enunciado: 'Коті хоче намалювати сходи. Знайшли візерунок, який повторюється? Скільки разів повторюється? ',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir']
  }, {
    id: 236,
    nombre: '4.2.3a',
    titulo: 'Завдання 1',
    escena: "new EscenaDuba(\"      [-,-,-,-,O,O,O,O],      [-,-,-,-,-,-,-,O],      [-,-,-,-,-,-,-,-],      [-,P,-,-,-,-,-,-],      [-,-,-,-,-,O,A,-],      [-,-,-,-,O,O,O,O],      [O,O,O,O,O,O,O,O],      [O,O,O,O,O,O,O,O],\t\t\")",
    enunciado: 'Гаразд, у вас вже є рішення! Ви спробуєте його?',
    consignaInicial: 'Ви можете спробувати програму крок за кроком, щоб виявити помилки',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    debugging: true,
    solucionInicial: "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n    <block type=\"al_empezar_a_ejecutar\" id=\"1\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">\n    <statement name=\"program\">\n      <block type=\"MoverACasillaArriba\">\n      <next>\n      <block type=\"Repetir\">\n        <value name=\"count\">\n          <block type=\"math_number\">\n            <field name=\"NUM\">4</field>\n          </block>\n        </value>\n        <statement name=\"block\">\n          <block type=\"MoverACasillaIzquierda\">\n          </block>\n        </statement>\n      <next>\n      <block type=\"ComerChurrasco\">\n      </block>\n      </next>\n      </block>\n      </next>\n      </block>\n    </statement>\n    </block>\n  </xml>"
  }, {
    id: 237,
    nombre: '4.2.3b',
    titulo: 'Завдання 2',
    escena: "new EscenaDuba(\"      [O,-,-,-,O,O,O,O],      [-,A,-,-,-,-,O,-],      [O,O,-,-,-,-,-,-],      [O,O,O,-,-,-,-,-],      [O,O,O,-,-,-,-,-],      [O,O,O,O,O,-,P,-],      [O,O,O,O,O,O,O,O],      [O,O,O,O,O,O,O,O],\t\t\")",
    enunciado: 'Як трапилось, що Дуба не може їсти свою улюблену страву? Вилучте, модифікуйте та/або додайте відсутні блоки для досягнення своєї мети.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir'],
    debugging: true,
    solucionInicial: "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n    <block type=\"al_empezar_a_ejecutar\" id=\"1\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">\n    <statement name=\"program\">\n      <block type=\"Repetir\">\n        <value name=\"count\">\n          <block type=\"math_number\">\n            <field name=\"NUM\">5</field>\n          </block>\n        </value>\n        <statement name=\"block\">\n          <block type=\"MoverACasillaDerecha\">\n          <next>\n          <block type=\"MoverACasillaAbajo\">\n          </block>\n          </next>\n          </block>\n        </statement>\n      <next>\n      <block type=\"ComerChurrasco\">\n      </block>\n      </next>\n      </block>\n    </statement>\n    </block>\n  </xml>"
  }, {
    id: 238,
    nombre: '4.2.3c',
    titulo: 'Завдання 3',
    escena: "new EscenaCoty(\n      [],\n      [[{x:-100,y:-100},{x:-100,y:-50},{x:-50,y:-50},{x:-50,y:0},{x:0,y:0},{x:0,y:50},{x:50,y:50},{x:50,y:100},{x:100,y:100}]],\n      {xCoty: -100, yCoty: -100}      \n    )",
    enunciado: 'Яку схему Коті має повторити цього разу? Чи правильне запропоноване рішення?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir'],
    debugging: true,
    solucionInicial: "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n      <block type=\"al_empezar_a_ejecutar\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">\n        <statement name=\"program\">\n          <block type=\"Repetir\">\n            <value name=\"count\">\n              <block type=\"math_number\">\n                <field name=\"NUM\">4</field>\n              </block>\n            </value>\n            <statement name=\"block\">\n              <block type=\"MoverArribaDibujando\"></block>\n            </statement>\n            <next>\n              <block type=\"Repetir\">\n                <value name=\"count\">\n                  <block type=\"math_number\">\n                    <field name=\"NUM\">4</field>\n                  </block>\n                </value>\n                <statement name=\"block\">\n                  <block type=\"MoverDerechaDibujando\"></block>\n                </statement>\n              </block>\n            </next>\n          </block>\n        </statement>\n      </block>\n    </xml>"
  }, {
    id: 239,
    nombre: '4.2.3d',
    titulo: 'Завдання 4',
    escena: "new EscenaCoty(\n      [],\n      [[{x:-120,y:-60},{x:-120,y:-20},{x:-80,y:-20},{x:-80,y:20},{x:-40,y:20},{x:-40,y:60},{x:0,y:60},{x:40,y:60},{x:40,y:20},{x:80,y:20},{x:80,y:-20},{x:120,y:-20},{x:120,y:-60}]],\n      {xCoty: -120, yCoty: -60, longitudSegmento: 40}      \n    )",
    enunciado: 'Знову Коті має проблеми! Чи зможете ви знайти помилки та виправити їх?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir'],
    debugging: true,
    solucionInicial: "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n      <block type=\"al_empezar_a_ejecutar\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">\n        <statement name=\"program\">\n          <block type=\"Repetir\">\n            <value name=\"count\">\n              <block type=\"math_number\">\n                <field name=\"NUM\">2</field>\n              </block>\n            </value>\n            <statement name=\"block\">\n              <block type=\"MoverArribaDibujando\">\n                <next>\n                  <block type=\"MoverDerechaDibujando\"></block>\n                </next>\n              </block>\n            </statement>\n            <next>\n              <block type=\"Repetir\">\n                <value name=\"count\">\n                  <block type=\"math_number\">\n                    <field name=\"NUM\">3</field>\n                  </block>\n                </value>\n                <statement name=\"block\">\n                  <block type=\"MoverDerechaDibujando\"></block>\n                </statement>\n                <next>\n                  <block type=\"Repetir\">\n                    <value name=\"count\">\n                      <block type=\"math_number\">\n                        <field name=\"NUM\">3</field>\n                      </block>\n                    </value>\n                    <statement name=\"block\">\n                      <block type=\"MoverAbajoDibujando\"></block>\n                    </statement>\n                  </block>\n                </next>\n              </block>\n            </next>\n          </block>\n        </statement>\n      </block>\n    </xml>"
  }, {
    id: 240,
    nombre: '4.I1a',
    titulo: 'Завдання 1',
    escena: "new EscenaLita(\"      [O,-,-,-,O,-,A],      [-,-,-,O,O,-,O],      [O,O,O,O,-,-,O],      [O,O,O,O,-,O,O],      [O,-,O,-,-,O,O],      [-,-,O,-,O,O,O],      [E,L,T,-,O,O,O]    \")",
    enunciado: 'Чи знаходите ви повторювані кроки? Які вони? Створіть програму, яка допомагає Літі приготувати страву цього дня.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir']
  }, {
    id: 241,
    nombre: '4.I1b',
    titulo: 'Завдання 2',
    escena: "new EscenaLita(\"      [L,-,-,-,-,T,E],      [-,O,-,-,O,-,O],      [-,O,O,O,O,-,O],      [-,O,O,O,-,-,O],      [-,-,-,O,-,-,-],      [A,-,-,-,-,-,-],      [-,O,O,-,-,O,O]    \")",
    debugging: true,
    solucionInicial: "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n      <block type=\"al_empezar_a_ejecutar\" id=\"1\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\">\n      <statement name=\"program\">\n        <block type=\"Repetir\">\n          <value name=\"count\">\n            <block type=\"math_number\">\n              <field name=\"NUM\">4</field>\n            </block>\n          </value>\n          <statement name=\"block\">\n            <block type=\"MoverACasillaArriba\">\n            </block>\n          </statement>\n        <next>\n        <block type=\"AgarrarLechuga\">\n        <next>\n        <block type=\"Repetir\">\n          <value name=\"count\">\n            <block type=\"math_number\">\n              <field name=\"NUM\">5</field>\n            </block>\n          </value>\n          <statement name=\"block\">\n            <block type=\"MoverACasillaDerecha\">\n            <next>\n            <block type=\"AgarrarTomate\">\n            </block>\n            </next>\n            </block>\n          </statement>\n        <next>\n        <block type=\"MoverACasillaDerecha\">\n        <next>\n        <block type=\"PrepararEnsalada\">\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n        </next>\n        </block>\n      </statement>\n      </block>\n    </xml>",
    enunciado: 'Як і раніше, Літа не може приготувати свій салат без вас! Скільки разів їй повторювати кроки, щоб дістатися до салату? Що слід змінити? Що відбувається, коли ви маєте намір взяти томат?',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir']
  }, {
    id: 242,
    nombre: '5.1.3a',
    titulo: 'Завдання 1',
    escena: "new EscenaDuba(\"[A,P?(0.6)]\", {}, [0,1])",
    enunciado: 'Іноді є м\'ясо, а іноді його немає! Чи можете ви зробити лише одну програму, щоб Дуба завжди просувався і їв, лише якщо є м\'ясо?',
    consignaInicial: 'Блок "Якщо" служить для того, щоб щось зробити у певному випадку, а іноді ні. Він служить, щоб запитати!',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Si', 'HayChurrasco']
  }, {
    id: 243,
    nombre: '5.1.3b',
    titulo: 'Завдання 2',
    escena: "new EscenaDuba([\"[A,-,-]\",\"[A,P,-]\",\"[A,-,P]\",\"[A,P,P]\"], {}, [0,2])",
    enunciado: 'Тепер Дуба повинен просуватися двічі. Він повинен з\'їсти всі обіди, які з’являються!... Але тільки якщо вони з\'являться',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Si', 'HayChurrasco']
  }, {
    id: 244,
    nombre: '5.1.3c',
    titulo: 'Завдання 3',
    escena: "new EscenaCoty(\n      [],\n      [{x:-120,y:50},{x:20,y:50},{x:20,y:-90},{x:-120,y:-90},{x:-120,y:50}],\n      {xCoty: -120, yCoty: 50, puedeHaberCharco: true, longitudSegmento: 140}\n    )",
    enunciado: 'Коті має намалювати квадрат, але... Будьте уважні, іноді з’являється калюжа!',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Si', 'HayCharco']
  }, {
    id: 245,
    nombre: '5.1.4a',
    titulo: 'Завдання 1',
    escena: "new EscenaLita(\"[A,-,L|T]\")",
    enunciado: 'Літа хоче зібрати будь-які овочі. Але дії повинні бути правильними!',
    consignaInicial: 'Блок Якщо/Інакше дозволяє вибирати між двома альтернативами. Ви просто повинні правильно поставити питання',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Si', 'SiNo', 'HayTomate', 'HayLechuga']
  }, {
    id: 246,
    nombre: '5.1.4b',
    titulo: 'Завдання 2',
    escena: "new EscenaDuba([\"      [O,O,O,O,O],      [O,A,-,P,O],      [O,O,O,O,O],      [O,O,O,O,O],      [O,O,O,O,O],    \",\"      [O,O,O,O,O],      [O,A,O,O,O],      [O,-,O,O,O],      [O,P,O,O,O],      [O,O,O,O,O],\t\t\"])",
    enunciado: 'Ви не завжди повинні рухатись праворуч... Яке питання використовує Дуба для вирішення?',
    consignaInicial: 'Ви також можете розмістити більше однієї інструкції в блок Якщо/Інакше',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Si', 'SiNo', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 247,
    nombre: '5.1.4c',
    titulo: 'Завдання 3',
    escena: "new EscenaDuba(\"      [O,O,O,O,O],      [-,-,*,-,-],      [A,-,*,-,P],      [O,O,O,O,O],\t\t\", { coleccion: [\"O\"] })",
    enunciado: 'Остерігайся, Дуба! Де може з’явитися перешкода? Нам доведеться обрати шлях, який потрібно пройти!',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Si', 'SiNo', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 248,
    nombre: '5.2.1a',
    titulo: 'Завдання 1',
    escena: "new EscenaDuba(\"[A,-,-,-,-,-,-,P?]\", {}, [0,7])",
    enunciado: 'Зараз Дуба далеко, і йому належить вирішити, їсти чи ні. Чи допоможуть йому блоки, про які ми дізналися?',
    consignaInicial: 'Для розуміння проблеми важливо кілька разів натиснути запуск',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir', 'Si', 'SiNo', 'HayChurrasco']
  }, {
    id: 249,
    nombre: '5.2.1b',
    titulo: 'Завдання 2',
    escena: "new EscenaDuba(\"[A,#P,#P,#P,#P,#P,#P,#P]\", { macros: { \"P\": \"*>P?\" }, coleccion: [\"P\"] }, [0,7])",
    enunciado: 'Оце так обід! Які дії повинен повторити Дуба? Скільки питань ви повинні задати?',
    consignaInicial: 'Для розуміння проблеми важливо кілька разів натиснути запуск',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'Repetir', 'Si', 'SiNo', 'HayChurrasco']
  }, {
    id: 250,
    nombre: '5.2.1c',
    titulo: 'Завдання 3',
    escena: "new EscenaLita(\"[A],[*>L|T],[*>L|T],[*>L|T],[*>L|T],[*>L|T],[*>L|T],[E]\", { coleccion: [\"T\", \"L\"] })",
    enunciado: 'Літа повинна повторити своє рішення кілька разів! Завжди є овоч, просто потрібно вирішити, який з них захопити на кожному кроці.',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'AgarrarTomate', 'AgarrarLechuga', 'PrepararEnsalada', 'Repetir', 'Si', 'SiNo', 'HayTomate', 'HayLechuga']
  }, {
    id: 251,
    nombre: '5.I1a',
    titulo: 'Завдання 1',
    escena: "new EscenaTotoEscritor(new ObjetivoCopiar())",
    enunciado: 'Тепер Тото вміє писати! Допоможіть йому скопіювати все слово.',
    consignaInicial: 'Тото знає, як написати літеру, яку він каже',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'EscribirLetraActualEnOtraCuadricula', 'Repetir', 'Si', 'SiNo']
  }, {
    id: 252,
    nombre: '5.I1b',
    titulo: 'Завдання 2',
    escena: "new EscenaTotoEscritor(new ObjetivoX())",
    enunciado: 'Тепер Тото хоче написати "X" замість кожної літери. Неважливо, якою була літера! Скільки X слід написати?',
    consignaInicial: 'Тото також знає, як написати літеру, який ти кажеш',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'EscribirLetraActualEnOtraCuadricula', 'EscribirTextoDadoEnOtraCuadricula', 'Repetir', 'Si', 'SiNo']
  }, {
    id: 253,
    nombre: '5.I1c',
    titulo: 'Завдання 3',
    escena: "new EscenaTotoEscritor(new ObjetivoMicha())",
    enunciado: 'Тото любить грати з літерами: запропонуйте йому скопіювати слово, але коли він знайде М, потрібно додати "ICH"',
    consignaInicial: 'При копіюванні "Cemento" буде написано "Cemichento"',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'EscribirLetraActualEnOtraCuadricula', 'EscribirTextoDadoEnOtraCuadricula', 'Repetir', 'Si', 'SiNo', 'hayVocalRMT']
  }, {
    id: 254,
    nombre: '5.I1d',
    titulo: 'Завдання 4',
    escena: "new EscenaTotoEscritor(new ObjetivoJeringozo())",
    enunciado: 'Допоможіть Тото зашифрувати слово секретним кодом ЛисМикита. Для прикладу, слово "DUBA" набуде вигляду "DUPUBAPA"',
    consignaInicial: 'Код ЛисМикита додає "PA" до літери "A", "PE" - до літери "E", і так до кожної голосної',
    debeFelicitarse: true,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'EscribirLetraActualEnOtraCuadricula', 'EscribirTextoDadoEnOtraCuadricula', 'Repetir', 'Si', 'SiNo', 'hayVocalRMT']
  }, {
    id: 255,
    nombre: 'CotyDibujoLibre',
    titulo: 'Коті малює що хоче!',
    imagen: 'Coty',
    escena: "new EscenaCoty([],[],{xCoty: -50, yCoty: 50})",
    enunciado: 'У цій вправі ви зможете зробити малюнок, який вам найбільше подобається',
    consignaInicial: 'Ми включаємо всі можливі блоки, щоб ви могли реалізувати свої навички.',
    debeFelicitarse: false,
    estiloToolbox: 'sinCategorias',
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir', 'DibujarLado', 'GirarGrados', 'Numero', 'OpAritmetica']
  }, // Los desafíos a partir de acá (id paracapturaXX) se crearon únicamente para tomar capturas
  // para el manual de Tandil y no están pensados para ser usados por los alumnos.
  {
    id: 'paracaptura01',
    nombre: '3.2.1a',
    titulo: 'Cap. 3 / SD2 / A1 a',
    imagen: 'Duba',
    escena: "new EscenaDubaFondoBlanco(\"      [O,O,O,O],      [O,-,A,O],      [O,P,O,O],      [O,O,O,O],\t\t\")",
    estiloToolbox: 'sinCategorias',
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco']
  }, {
    id: 'paracaptura02',
    nombre: '3.2.1b-1',
    titulo: 'Cap. 3 / SD2 / A1 b-1',
    imagen: 'Duba',
    escena: "new EscenaDubaFondoBlanco(\"      [O,O,O],      [O,P,O],      [A,-,O],\t\t\")",
    estiloToolbox: 'sinCategorias',
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco']
  }, {
    id: 'paracaptura03',
    nombre: '3.2.1b-2',
    titulo: 'Cap. 3 / SD2 / A1 b-2',
    imagen: 'Duba',
    escena: "new EscenaDubaFondoBlanco(\"      [O,O,O],      [O,-,P],      [A,-,O],\t\t\")",
    estiloToolbox: 'sinCategorias',
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco']
  }, {
    id: 'paracaptura04',
    nombre: '3.2.1b-3',
    titulo: 'Cap. 3 / SD2 / A1 b-3',
    imagen: 'Duba',
    escena: "new EscenaDubaFondoBlanco(\"      [O,O,O],      [P,-,A],      [O,O,O],\t\t\")",
    estiloToolbox: 'sinCategorias',
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco']
  }, {
    id: 'paracaptura05',
    nombre: '3.2.1b-4',
    titulo: 'Cap. 3 / SD2 / A1 b-4',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,A,O],      [-,O,O],      [P,O,O],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco']
  }, {
    id: 'paracaptura06',
    nombre: '3.2.1 c',
    titulo: 'Cap. 3 / SD2 / A1 c',
    imagen: 'Coty',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaCotyFondoBlanco(\n      [],\n      [[{x:-30,y:60},{x:30,y:60},{x:30,y:0},{x:30,y:-60}]],\n      {xCoty: -30, yCoty: 60, longitudSegmento: 60}\n    )",
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir', 'Si', 'SiNo', 'HayCharco']
  }, {
    id: 'paracaptura07',
    nombre: '3.2.1 d',
    titulo: 'Cap. 3 / SD2 / A1 d',
    imagen: 'Coty',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaCotyFondoBlanco(\n      [],\n      [[{x:-40,y:-40},{x:-40,y:40},{x:40,y:40},{x:40,y:-40},{x:-40,y:-40}]],\n      {xCoty: -40, yCoty: -40, longitudSegmento: 80}\n    )",
    bloques: ['MoverArribaDibujando', 'MoverAbajoDibujando', 'MoverDerechaDibujando', 'MoverIzquierdaDibujando', 'SaltarAbajo', 'SaltarArriba', 'SaltarDerecha', 'SaltarIzquierda', 'Repetir', 'Si', 'SiNo', 'HayCharco']
  }, {
    id: 'paracaptura08',
    nombre: '3.I1 a',
    titulo: 'Cap. 3 / Integradora / A1 a',
    imagen: 'Toto',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaTotoLectorFondoBlanco([\n      ['n', 'A'],\n      ['a', 'b'],\n    ], \"banana\")",
    bloques: ['MoverLeyendoArriba', 'MoverLeyendoAbajo', 'MoverLeyendoDerecha', 'MoverLeyendoIzquierda', 'Repetir', 'Si', 'SiNo']
  }, {
    id: 'paracaptura09',
    nombre: '3.I1 b',
    titulo: 'Cap. 3 / Integradora / A1 b',
    imagen: 'Toto',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaTotoLectorFondoBlanco([\n      ['f', 'A'],\n      ['a', 'h'],\n      ['m', 'u'],\n      ['c', 'a'],\n    ], \"humahuaca\")",
    bloques: ['MoverLeyendoArriba', 'MoverLeyendoAbajo', 'MoverLeyendoDerecha', 'MoverLeyendoIzquierda', 'Repetir', 'Si', 'SiNo']
  }, {
    id: 'paracaptura10',
    nombre: '3.I1 a',
    titulo: 'Cap. 3 / Integradora / A1 a V2',
    imagen: 'Toto',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaTotoLectorFondoBlanco([\n      ['a', 'v', 'u'],\n      ['j', 'n', 'A'],\n      ['n', 'a', 'b'],\n      ['a', 'r', 'e'],\n    ], \"banana\")",
    bloques: ['MoverLeyendoArriba', 'MoverLeyendoAbajo', 'MoverLeyendoDerecha', 'MoverLeyendoIzquierda', 'Repetir', 'Si', 'SiNo']
  }, {
    id: 'paracaptura11',
    nombre: '3.I1 b',
    titulo: 'Cap. 3 / Integradora / A1 b V2',
    imagen: 'Toto',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaTotoLectorFondoBlanco([\n      ['f', 'A', 'p'],\n      ['a', 'h', 'e'],\n      ['m', 'u', 'o'],\n      ['c', 'a', 'j'],\n    ], \"humahuaca\")",
    bloques: ['MoverLeyendoArriba', 'MoverLeyendoAbajo', 'MoverLeyendoDerecha', 'MoverLeyendoIzquierda', 'Repetir', 'Si', 'SiNo']
  }, {
    id: 'paracaptura12',
    nombre: '4.2.1a',
    titulo: 'Cap. 4 / SD2 / A1 a',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [O,-,-,A,O],      [O,O,O,-,O],      [O,-,-,-,-],      [O,-,-,-,-],      [O,O,-,P,-],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco']
  }, {
    id: 'paracaptura13',
    nombre: '4.2.1b',
    titulo: 'Cap. 4 / SD2 / A1 b',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,-,-,P],      [-,-,O,O,-],      [-,-,O,O,-],      [-,-,O,-,-],      [A,O,O,-,O],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco']
  }, {
    id: 'paracaptura14',
    nombre: '4.2.1c',
    titulo: 'Cap. 4 / SD2 / A1 c',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [A,O,O,O,O],      [-,-,O,O,O],      [-,-,-,O,-],      [O,-,-,-,-],      [O,-,O,-,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco']
  }, {
    id: 'paracaptura15',
    nombre: '4.2.2a',
    titulo: 'Cap. 4 / SD2 / A1 a',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,-,-,-,O,O,O],      [-,A,-,-,-,-,O,O],      [-,-,-,-,-,-,-,O],      [O,O,-,-,P,-,-,O],      [O,-,-,-,-,-,-,O],      [O,-,-,-,-,-,-,-],      [O,O,-,-,-,O,-,O],      [O,O,O,O,O,O,O,O],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco']
  }, {
    id: 'paracaptura16',
    nombre: '4.2.2b',
    titulo: 'Cap. 4 / SD2 / A1 b',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [O,O,-,-,-,-,-,-],      [O,-,-,-,-,-,-,-],      [-,-,P,-,-,-,-,-],      [-,-,-,-,-,-,-,-],      [-,-,O,O,-,-,-,-],      [O,-,O,O,-,-,-,-],      [O,O,O,O,-,A,-,O],      [O,O,O,O,O,O,O,O],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco']
  }, {
    id: 'paracaptura17',
    nombre: '4.2.2c',
    titulo: 'Cap. 4 / SD2 / A1 c',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,-,P,-,-,-,O],      [-,-,-,-,-,-,-,-],      [-,-,-,-,-,-,-,-],      [-,-,-,-,-,-,-,-],      [O,O,O,-,-,-,-,-],      [O,O,O,O,-,-,-,-],      [O,O,O,O,-,O,-,A],      [O,O,O,O,O,O,-,-],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco']
  }, {
    id: 'paracaptura18',
    nombre: '5SD2A2a',
    titulo: 'Cap. 5 / SD2 / A2 a',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,-,-,-],      [A,O,-,-,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 'paracaptura19',
    nombre: '5SD2A2b',
    titulo: 'Cap. 5 / SD2 / A2 b',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,-,-,-],      [A,-,-,O,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 'paracaptura20',
    nombre: '5SD2A2c',
    titulo: 'Cap. 5 / SD2 / A2 c',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,O,-,-],      [A,-,-,-,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 'paracaptura21',
    nombre: '5SD2A2d',
    titulo: 'Cap. 5 / SD2 / A2 d',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,O,-,-,-],      [A,-,-,-,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 'paracaptura22',
    nombre: '5SD2A2e',
    titulo: 'Cap. 5 / SD2 / A2 e',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,-,-,O],      [A,-,-,-,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 'paracaptura23',
    nombre: '5SD2A2f',
    titulo: 'Cap. 5 / SD2 / A2 f',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,-,O,-],      [A,-,-,-,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 'paracaptura24',
    nombre: '5SD2A2g',
    titulo: 'Cap. 5 / SD2 / A2 g',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,O,-,-,-],      [A,-,-,O,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 'paracaptura25',
    nombre: '5SD2A2h',
    titulo: 'Cap. 5 / SD2 / A2 h',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,-,-,-],      [A,-,-,O,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 'paracaptura26',
    nombre: '5SD2A2i',
    titulo: 'Cap. 5 / SD2 / A2 i',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,O,-,-],      [A,-,-,-,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 'paracaptura27',
    nombre: '5SD2A2j',
    titulo: 'Cap. 5 / SD2 / A2 j',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,-,-,-],      [A,O,-,-,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 'paracaptura28',
    nombre: '5SD2A2k',
    titulo: 'Cap. 5 / SD2 / A2 k',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,-,O,-],      [A,-,-,-,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }, {
    id: 'paracaptura29',
    nombre: '5SD2A2l',
    titulo: 'Cap. 5 / SD2 / A2 l',
    imagen: 'Duba',
    estiloToolbox: 'sinCategorias',
    escena: "new EscenaDubaFondoBlanco(\"      [-,-,-,-,-],      [A,-,-,-,P],\t\t\")",
    bloques: ['Repetir', 'Si', 'SiNo', 'MoverACasillaAbajo', 'MoverACasillaArriba', 'MoverACasillaIzquierda', 'MoverACasillaDerecha', 'ComerChurrasco', 'HayChurrasco', 'HayObstaculoArriba', 'HayObstaculoAbajo', 'HayObstaculoIzquierda', 'HayObstaculoDerecha']
  }];
  _exports.default = _default;
});
;define("pilasbloques/mirage/fixtures/grupos", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = [{
    id: 1,
    titulo: 'Автоматизація, команди, процедури та повторення',
    desafioIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }, {
    id: 2,
    titulo: 'Вибір альтернатив',
    desafioIds: [13, 14, 15, 16, 17, 18]
  }, {
    id: 3,
    titulo: 'Умовне повторення',
    desafioIds: [19, 20, 21, 22, 23, 24, 25]
  }, {
    id: 4,
    titulo: 'Числові датчики',
    desafioIds: [26, 27]
  }, {
    id: 5,
    titulo: 'Параметризація рішень',
    desafioIds: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 130, 131, 132, 133, 134, 135, 136]
  }, {
    id: 'manual1cPrimaria3',
    titulo: 'Розділ 3: Програмування на вашому комп\'ютері'
  }, {
    id: 'manual1cPrimaria3.1.2',
    titulo: 'Нагодуй котика Дубу',
    desafioIds: [201, 202, 203, 204, 205, 206]
  }, {
    id: 'manual1cPrimaria3.1.3',
    titulo: 'Коті починає малювати',
    desafioIds: [207, 208, 209, 210, 211, 212, 213]
  }, {
    id: 'manual1cPrimaria3.1.4',
    titulo: 'У пошуках салату та томатів',
    desafioIds: [214, 215]
  }, {
    id: 'manual1cPrimaria3.2.2',
    titulo: 'Секрети салатів',
    desafioIds: [216, 217, 218, 219]
  }, {
    id: 'manual1cPrimaria3.2.3',
    titulo: 'Проблеми з їжею!',
    desafioIds: [220, 221, 222, 223, 224]
  }, {
    id: 'manual1cPrimaria3.I',
    titulo: 'Слова Тото',
    desafioIds: [225, 226, 227, 228, 229]
  }, {
    id: 'manual1cPrimaria4',
    titulo: 'Розділ 4: Повторення'
  }, {
    id: 'manual1cPrimaria4.1.3',
    titulo: 'Більше м\'яса для Дуби',
    desafioIds: [230, 231, 232]
  }, {
    id: 'manual1cPrimaria4.1.4',
    titulo: 'Лінії Коті',
    desafioIds: [233, 234, 235]
  }, {
    id: 'manual1cPrimaria4.2.3',
    titulo: 'Виправляємо програми',
    desafioIds: [236, 237, 238, 239]
  }, {
    id: 'manual1cPrimaria4.I',
    titulo: 'Літа любить овочі',
    desafioIds: [240, 241]
  }, {
    id: 'manual1cPrimaria5',
    titulo: 'Розділ 5: Вибір варіантів'
  }, {
    id: 'manual1cPrimaria5.1.3',
    titulo: 'Лише за певних умов',
    desafioIds: [242, 243, 244]
  }, {
    id: 'manual1cPrimaria5.1.4',
    titulo: 'А якщо інакше?',
    desafioIds: [245, 246, 247]
  }, {
    id: 'manual1cPrimaria5.2.1',
    titulo: 'Більше м\'яса та салатів',
    desafioIds: [248, 249, 250]
  }, {
    id: 'manual1cPrimaria5.I',
    titulo: 'Таємний агент Топотопо',
    desafioIds: [251, 252, 253, 254]
  }, {
    id: 'manual1cPrimariaOtros',
    titulo: 'Інші',
    desafioIds: [255]
  }, {
    id: 'manual1cPrimariaCapturasCap3',
    titulo: 'Desafíos para hacer capturas / Capítulo 3',
    desafioIds: ['paracaptura01', 'paracaptura02', 'paracaptura03', 'paracaptura04', 'paracaptura05', 'paracaptura06', 'paracaptura07', 'paracaptura08', 'paracaptura09', 'paracaptura10', 'paracaptura11']
  }, {
    id: 'manual1cPrimariaCapturasCap4',
    titulo: 'Desafíos para hacer capturas / Capítulo 4',
    desafioIds: ['paracaptura12', 'paracaptura13', 'paracaptura14', 'paracaptura15', 'paracaptura16', 'paracaptura17']
  }, {
    id: 'manual1cPrimariaCapturasCap5',
    titulo: 'Desafíos para hacer capturas / Capítulo 5',
    desafioIds: ['paracaptura18', 'paracaptura19', 'paracaptura20', 'paracaptura21', 'paracaptura22', 'paracaptura23', 'paracaptura24', 'paracaptura25', 'paracaptura26', 'paracaptura27', 'paracaptura28', 'paracaptura29']
  }];
  _exports.default = _default;
});
;define("pilasbloques/mirage/fixtures/libros", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = [{
    id: 1,
    grupoIds: ['manual1cPrimaria3', 'manual1cPrimaria3.1.2', 'manual1cPrimaria3.1.3', 'manual1cPrimaria3.1.4', 'manual1cPrimaria3.2.2', 'manual1cPrimaria3.2.3', 'manual1cPrimaria3.I', 'manual1cPrimaria4', 'manual1cPrimaria4.1.3', 'manual1cPrimaria4.1.4', 'manual1cPrimaria4.2.3', 'manual1cPrimaria4.I', 'manual1cPrimaria5', 'manual1cPrimaria5.1.3', 'manual1cPrimaria5.1.4', 'manual1cPrimaria5.2.1', 'manual1cPrimaria5.I', 'manual1cPrimariaOtros'],
    nombre: 'primer-ciclo',
    titulo: 'Перший рівень',
    descripcion: 'Вправи для учнів, які починають вивчати інформатику у молодшій та основній школі',
    modoLecturaSimple: true,
    // modo de lectura para niños pequeños.
    desafiosCortos: true // significa que en un grupo/serie de desafíos, se deben hacer uno detrás del otro.
    // sirve particularmente para mostrar el título de la serie en el desafío.
    // ver pilas-editor.hbs

  }, {
    id: 2,
    grupoIds: [1, 2, 3, 4, 5],
    nombre: 'programar',
    titulo: 'Другий рівень',
    descripcion: 'Вправи для учнів молодшої та основної школи, які вже знайомі з основами програмування.'
  }, // Libro invisible, exclusivo para hacer capturas:
  {
    id: 'capturas1c',
    grupoIds: ['manual1cPrimariaCapturasCap3', 'manual1cPrimariaCapturasCap4', 'manual1cPrimariaCapturasCap5'],
    titulo: 'Primer ciclo para hacer capturas',
    modoLecturaSimple: true,
    desafiosCortos: true,
    oculto: true
  }];
  _exports.default = _default;
});
;define("pilasbloques/mirage/models/desafio", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = _emberCliMirage.Model.extend({
    grupo: (0, _emberCliMirage.belongsTo)('grupo')
  });

  _exports.default = _default;
});
;define("pilasbloques/mirage/models/grupo", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = _emberCliMirage.Model.extend({
    desafios: (0, _emberCliMirage.hasMany)('desafio', {
      inverseOf: 'grupo'
    }),
    libro: (0, _emberCliMirage.belongsTo)('libro')
  });

  _exports.default = _default;
});
;define("pilasbloques/mirage/models/libro", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = _emberCliMirage.Model.extend({
    grupos: (0, _emberCliMirage.hasMany)('grupo', {
      inverseOf: 'libro'
    })
  });

  _exports.default = _default;
});
;define("pilasbloques/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  /*jshint esversion: 6 */
  function _default(server) {
    server.loadFixtures();
  }
});
;define("pilasbloques/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jshint esversion: 6 */
  var _default = _emberCliMirage.JSONAPISerializer.extend({
    include: ['libros', 'grupos', 'desafios']
  });

  _exports.default = _default;
});
;define("pilasbloques/models/desafio", ["exports", "ember-data/model", "ember-data/attr", "ember-data/relationships"], function (_exports, _model, _attr, _relationships) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _model.default.extend({
    nombre: (0, _attr.default)('string'),
    titulo: (0, _attr.default)('string'),
    imagen: (0, _attr.default)('string'),
    deshabilitado: (0, _attr.default)('boolean'),
    enunciado: (0, _attr.default)('string'),
    consignaInicial: (0, _attr.default)('string'),
    escena: (0, _attr.default)('string'),
    debeFelicitarse: (0, _attr.default)(),
    estiloToolbox: (0, _attr.default)('string'),
    grupo: (0, _relationships.belongsTo)('grupo'),
    bloques: (0, _attr.default)(),
    solucionInicial: (0, _attr.default)('string'),
    debugging: (0, _attr.default)('boolean'),
    nombreImagen: Ember.computed('imagen', 'nombre', function () {
      return "".concat(this.imagen || this.nombre || 'proximamente', ".png");
    })
  });

  _exports.default = _default;
});
;define("pilasbloques/models/grupo", ["exports", "ember-data/model", "ember-data/attr", "ember-data/relationships"], function (_exports, _model, _attr, _relationships) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _model.default.extend({
    titulo: (0, _attr.default)('string'),
    desafios: (0, _relationships.hasMany)('desafio'),
    // , {inverseOf: 'grupo'})
    libro: (0, _relationships.belongsTo)('libro')
  });

  _exports.default = _default;
});
;define("pilasbloques/models/libro", ["exports", "ember-data", "ember-data/relationships"], function (_exports, _emberData, _relationships) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    titulo: _emberData.default.attr('string'),
    nombre: _emberData.default.attr('string'),
    descripcion: _emberData.default.attr('string'),
    grupos: (0, _relationships.hasMany)('grupo'),
    modoLecturaSimple: _emberData.default.attr('boolean'),
    desafiosCortos: _emberData.default.attr('boolean'),
    oculto: _emberData.default.attr('boolean')
  });

  _exports.default = _default;
});
;define("pilasbloques/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("pilasbloques/router", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var Router = Ember.Router.extend({
    location: _environment.default.locationType
  });
  Router.map(function () {
    this.route('acercade');
    this.route('desafio', {
      path: '/desafio/:desafio_id'
    });
    /* Rutas para el curso online 2016 (moodle) */

    this.route('desafios', function () {
      this.route('cursoAlumno', {
        path: "/cursoAlumno/:hash"
      });
      this.route('cursoDocente', {
        path: "/cursoDocente/:hash"
      });
      this.route('desafioPorNombre', {
        path: '/:nombreDelDesafio'
      });
    });
    this.route('libros', function () {
      this.route('verLibro', {
        path: ":libro_id"
      });
    });
    this.route('galeria');
  });
  Router.reopen({
    notifyGoogleAnalytics: Ember.on("didTransition", function () {
      if (ga && _environment.default.googleAnalyticsEnabled) {
        var url = this.url;
        ga('send', 'pageview', {
          page: url,
          title: url
        });
      }
    })
  });
  var _default = Router;
  _exports.default = _default;
});
;define("pilasbloques/routes/acercade", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("pilasbloques/routes/desafio", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    queryParams: {
      codigo: {
        replace: true
      }
    },
    pilas: Ember.inject.service()
  });

  _exports.default = _default;
});
;define("pilasbloques/routes/desafios/curso-alumno", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* Esta ruta es una especialización de la ruta Nombre,
   * ya que hace algo muy similar, pero esconde elementos
   * de la interfaz y permite guardar la solución en un
   * backend de datos.
   */
  var _default = Ember.Route.extend({
    cursoAPI: Ember.inject.service(),
    model: function model(params) {
      params.nombre = this.decodificarHash(params.hash).actividad;
      return this.store.findAll("desafio").then(function (data) {
        // TODO: reemplazar la linea anterior (findAll) y la siguiente
        //       por una consulta a ember-data más específica, como la que
        //       realiza findRecord, que solo debería traer un solo registro.
        //
        //       (esto está así ahora porque se debe corregir mirage antes).
        var model = data.findBy('nombre', params.nombre);

        if (!model) {
          throw new Error("No existe una actividad con el nombre ".concat(params.nombre));
        }

        return model;
      });
    },

    /* Agrega los parámetros decodificados del hash al modelo. */
    afterModel: function afterModel(model, transition) {
      var hash = this.obtener_hash_desde_transition(transition);
      var valores = this.decodificarHash(hash);
      model.idAlumno = valores.idAlumno;
      model.hash = valores.hashCompleto;
      return this.cursoAPI.obtener_solucion_xml_desde_hash(model.hash).then(function (solucion_xml) {
        model.set("solucion", btoa(solucion_xml));
      }).catch(function () {
        console.warn("Ha fallado solicitar la solución al servidor, esto es porque el alumno no hay guardado nunca.");
        return null;
      });
    },
    obtener_hash_desde_transition: function obtener_hash_desde_transition(transition) {
      return transition.params[this.routeName].hash;
    },
    decodificarHash: function decodificarHash(hash) {
      var hashString = atob(hash);
      var valores = hashString.split("-");

      if (valores.length !== 3) {
        throw Error("Hash con formato de piezas incorrecto: ".concat(hashString));
      }

      return {
        actividad: valores[0],
        idAlumno: valores[1],
        hashMoodle: valores[2],
        hashCompleto: hash
      };
    },
    activate: function activate() {
      this.ocultarLayout();
    },
    ocultarLayout: function ocultarLayout() {
      this.controllerFor('application').set('layout', false);
    },
    actions: {
      cuandoEjecuta: function cuandoEjecuta(codigoXML) {
        var nombre = this.get('currentModel.nombre');
        var hash = this.get('currentModel.hash');
        var idAlumno = this.get('currentModel.idAlumno');
        var parametros = {
          actividad: nombre,
          hash: hash,
          idAlumno: idAlumno,
          codigo_xml: codigoXML
        };
        this.cursoAPI.guardar(parametros).catch(function (reason) {
          console.error(reason);
          alert("Se a producido un error al guardar, por favor volvé a intentar.");
        });
      }
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/routes/desafios/curso-docente", ["exports", "pilasbloques/routes/desafios/curso-alumno"], function (_exports, _cursoAlumno) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _cursoAlumno.default.extend({
    afterModel: function afterModel(model, transition) {
      this._super(model, transition);

      return this.cursoAPI.obtener_solucion_xml_desde_hash(model.hash).then(function (solucion_xml) {
        model.set("solucion", btoa(solucion_xml));
      });
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/routes/desafios/desafio-por-nombre", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      var _this = this;

      return this.store.findAll("desafio").then(function (data) {
        // TODO: reemplazar la linea anterior (findAll) y la siguiente
        //       por una consulta a ember-data más específica, como la que
        //       realiza findRecord, que solo debería traer un solo registro.
        //
        //       (esto está así ahora porque se debe corregir mirage antes).
        var model = data.findBy('nombre', params.nombreDelDesafio);

        if (!model) {
          throw new Error("No existe una actividad con el nombre ".concat(params.nombreDelDesafio));
        }

        return _this.transitionTo("desafio", model);
      });
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/routes/desafios/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model() {
      return this.store.findAll('grupo');
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/routes/galeria", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    blockly: Ember.inject.service(),
    blocksGallery: Ember.inject.service(),
    activate: function activate() {
      this.blocksGallery.start();
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    beforeModel: function beforeModel()
    /* transition */
    {
      this.transitionTo('libros');
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/routes/libros/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model() {
      return this.store.findAll('libro');
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _ajax.default;
    }
  });
});
;define("pilasbloques/services/available-blocks-validator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /// Este service deshabilita los bloques que no estén disponibles para una actividad
  var _default = Ember.Service.extend({
    globalAvailableBlockTypes: ["al_empezar_a_ejecutar", "numero", "required_value", "required_statement"],
    procedureRelatedBlockTypes: ["procedures_defnoreturn", "procedures_callnoreturn", "variables_get", "param_get"],
    disableNotAvailableBlocksInWorkspace: function disableNotAvailableBlocksInWorkspace(activityBlocks) {
      var _this = this;

      Blockly.getMainWorkspace().getAllBlocks().filter(function (block) {
        return !_this._isAvailable(block, activityBlocks);
      }).forEach(function (block) {
        return _this._disable(block);
      });
    },
    _isAvailable: function _isAvailable(block, activityBlocks) {
      return this._match(this.globalAvailableBlockTypes, block) || this._match(activityBlocks, block) || this._match(this.procedureRelatedBlockTypes, block) && this._includes(activityBlocks, "procedimiento");
    },
    _match: function _match(availableBlockTypes, currentBlock) {
      var _this2 = this;

      var aliases = currentBlock.aliases || [];
      return this._includes(availableBlockTypes, currentBlock.type) || aliases.some(function (alias) {
        return _this2._includes(availableBlockTypes, alias);
      });
    },
    _includes: function _includes(availableBlockTypes, type) {
      return availableBlockTypes.map(function (name) {
        return name.toLowerCase();
      }).includes(type.toLowerCase());
    },
    _disable: function _disable(block) {
      block.setDisabled(true);
      block.setWarningText("Este bloque no está disponible en esta actividad.");
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/services/blockly", ["exports", "ember-blockly/services/blockly"], function (_exports, _blockly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _blockly.default;
    }
  });
});
;define("pilasbloques/services/blocks-gallery", ["exports", "@babel/runtime/helpers/esm/slicedToArray"], function (_exports, _slicedToArray2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    blockly: Ember.inject.service(),
    start: function start() {
      //START TODO: Move these definitions to another file
      Blockly.textToBlock = this._textToBlock;
      Blockly.isProcedure = this._isProcedure;
      Blockly.shouldExecute = this._shouldExecute.bind(this);
      Blockly.Events.fireRunCode = this._fireRunCodeEvent; //END TODO

      this._generarLenguaje();

      this._definirColores();

      this._definirBloquesIniciales();

      this._definirBloquesAccion();

      this._definirBloquesSensores();

      this._definirBloquesQueRepresentanValores();

      this._definirBloquesEstructurasDeControl();

      this._definirBloquesAlias();

      this._definirOperaciones(); // Should be after alias


      this._makeAllInputsRequired();
    },
    _textToBlock: function _textToBlock(text) {
      return Blockly.Xml.domToBlock(Blockly.Xml.textToDom(text), Blockly.mainWorkspace);
    },
    _fireRunCodeEvent: function _fireRunCodeEvent() {
      var event = Blockly.Events.fromJson({
        type: "ui",
        run: true
      }, Blockly.mainWorkspace);
      event.runCode = true;
      Blockly.Events.fire(event);
    },
    _shouldExecute: function _shouldExecute(block) {
      return block.allInputsFilled(false) || this._isEmptyProcedure(block);
    },
    _isProcedure: function _isProcedure(type) {
      return type == "procedures_defnoreturn";
    },
    _isEmptyProcedure: function _isEmptyProcedure(block) {
      return Blockly.isProcedure(block.type) && this._hasEmptyStatement(block);
    },
    _hasEmptyStatement: function _hasEmptyStatement(procedureBlock) {
      var statement = procedureBlock.getInputTargetBlock("STACK");
      return !statement || statement.isShadow();
    },
    _makeAllInputsRequired: function _makeAllInputsRequired() {
      Object.entries(Blockly.Blocks).filter(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            type = _ref2[0],
            _ = _ref2[1];

        return !Blockly.isProcedure(type);
      }) // jshint ignore:line
      .map(function (_ref3) {
        var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
            _ = _ref4[0],
            block = _ref4[1];

        return block;
      }) // jshint ignore:line
      .forEach(function (blockDef) {
        var oldInit = blockDef.init;

        blockDef.init = function () {
          if (oldInit) oldInit.bind(this)();
          requiredAllInputs(this);
        };
      });
    },

    /*
     * Método auxiliar para crear un bloque acción.
     *
     * El argumento 'opciones' tiene que definir estas propiedades:
     *
     *   - descripcion
     *   - icono
     *   - comportamiento
     *   - argumentos
     *
     */
    crearBloqueAccion: function crearBloqueAccion(nombre, opciones) {
      this._validar_opciones_obligatorias(nombre, opciones, ['descripcion', 'comportamiento', 'argumentos']);

      opciones.colour = opciones.colour || Blockly.Blocks.primitivas.COLOUR;
      var bloque = this.blockly.createCustomBlockWithHelper(nombre, opciones);
      bloque.categoria = "Команди";
      return bloque;
    },

    /*
     * Método auxiliar para crear un bloque nuevo a partir de otro original.
     *
     * Este método sirve para crear bloques como 'Si', 'Repetir' etc... ya que
     * esos bloques en realidad se generan a partir de los bloques estándar
     * como 'controls_if'.
     */
    crearBloqueAlias: function crearBloqueAlias(nombre, nombreDelBloqueOriginal, categoria, categoriaCustom) {
      if (!Blockly.Blocks[nombreDelBloqueOriginal]) {
        throw new Error("No existe el bloque ".concat(nombreDelBloqueOriginal, " al querer crear un alias, \xBFTal vez los argumentos est\xE1n invertidos?"));
      }

      var bloque = this.blockly.createAlias(nombre, nombreDelBloqueOriginal);
      bloque.categoria = categoria || Blockly.Blocks[nombreDelBloqueOriginal].categoria;

      if (categoriaCustom) {
        bloque.categoria_custom = categoriaCustom;
      }

      return bloque;
    },
    areAliases: function areAliases(alias, type) {
      return Blockly.Blocks[type].aliases.includes(alias);
    },

    /*
     * Método auxiliar para crear un bloque que sirva como sensor.
     *
     * El argumento 'opciones' tiene que definir estas propiedades:
     *
     *   - descripcion
     *   - icono
     *   - funcionSensor
     *
     */
    crearBloqueSensor: function crearBloqueSensor(nombre, opciones) {
      this._validar_opciones_obligatorias(nombre, opciones, ['descripcion', 'funcionSensor']);

      var formaDelBloque = opciones.icono ? "%1 " : "";
      formaDelBloque += opciones.esBool ? "" : "";
      formaDelBloque += opciones.descripcion;
      formaDelBloque += opciones.esBool ? "?" : "";
      var blockly = this.blockly;
      var bloque = blockly.createCustomBlock(nombre, {
        message0: formaDelBloque,
        colour: opciones.colour || Blockly.Blocks.sensores.COLOUR,
        inputsInline: true,
        output: null,
        args0: [{
          type: "field_image",
          src: "iconos/".concat(opciones.icono),
          width: 16,
          height: 16,
          alt: "*"
        }],
        code: ""
      }); // TODO: Arreglar generacion de codigo

      bloque.categoria = "Датчики";

      Blockly.MyLanguage[nombre] = function () {
        var codigo = "evaluar(".concat(JSON.stringify(opciones.funcionSensor), ")");
        return [codigo, Blockly.MyLanguage.ORDER_ATOMIC];
      };

      return bloque;
    },
    crearBloqueValor: function crearBloqueValor(nombre, opciones) {
      this._validar_opciones_obligatorias(nombre, opciones, ['descripcion', 'icono', 'valor']);

      opciones.colour = opciones.colour || Blockly.Blocks.primitivas.COLOUR;
      var bloque = this.blockly.createBlockValue(nombre, opciones);
      bloque.categoria = "Значення";
      return bloque;
    },

    /*
     * Lanza una exception si un diccionario no presenta alguna clave obligatoria.
     */
    _validar_opciones_obligatorias: function _validar_opciones_obligatorias(nombre, opciones, listaDeOpcionesObligatorias) {
      listaDeOpcionesObligatorias.forEach(function (opcion) {
        if (!(opcion in opciones)) {
          throw new Error("No se puede crear el bloque ".concat(nombre, " porque no se indic\xF3 un valor para la opci\xF3n ").concat(opcion, "."));
        }
      });
    },
    _definirColores: function _definirColores() {
      // Pisar las globales de Blockly es necesario pues usamos algunos bloques de Blockly como aliases.
      Blockly.Blocks.math.HUE = 94; // En PB 1.1.2 era '#48930e'

      Blockly.Blocks.logic.HUE = 210; // En PB 1.1.2 era '#5cb712'

      Blockly.Blocks.procedures.HUE = 290; // En PB 1.1.2 era '#6C52EB'

      Blockly.Blocks.variables.HUE = 330; // En PB 1.1.2 era '#cc5b22'

      Blockly.Blocks.texts.HUE = 160; // En PB 1.1.2 era '#4a6cd4'

      Blockly.Blocks.lists.HUE = 206; // En PB 1.1.2 era '#cc5b22'
      // Para los bloques propios

      Blockly.Blocks.primitivas = {
        COLOUR: '#4a6cd4'
      };
      Blockly.Blocks.control = {
        COLOUR: '#ee7d16'
      };
      Blockly.Blocks.sensores = {
        COLOUR: '#2ca5e2'
      };
      Blockly.Blocks.direcciones = {
        COLOUR: '#2ba4e2'
      };
      Blockly.Blocks.eventos = {
        COLOUR: '#00a65a'
      }; // == boton ejecutar
      // IN SCRATCH THE COLOURS ARE
      // 4a6cd4 MOTION
      // 8a55d7 LOOKS
      // bb42c3 SOUND
      // 0e9a6c PEN
      // ee7d16 DATA Variables
      // cc5b22 DATA Lists
      // c88330 EVENTS
      // e1a91a CONTROL
      // 2ca5e2 SENSING
      // 5cb712 OPERATORS
      // 49930e OPERATORS dark
      // 632d99 MORE BLOCKS
      // 5e4db3 PARAMS
    },
    _definirBloquesAccion: function _definirBloquesAccion() {
      this.crearBloqueAccion('ApretarBoton', {
        descripcion: 'Натиснути кнопку',
        icono: 'iconos.botonRojo.png',
        comportamiento: 'Interactuar',
        argumentos: "{\n        etiqueta: 'BotonAnimado',\n        nombreAnimacion: 'apretar',\n        animacionInteractuadoAlFinal: 'prendida',\n        mensajeError: 'Тут немає кнопки',\n        idTransicion: 'apretarBoton'\n      }"
      });
      this.crearBloqueAccion('EncenderLuz', {
        descripcion: 'Увімкнути світло',
        icono: 'icono.Lamparita.png',
        comportamiento: 'Encender',
        argumentos: "{'etiqueta':'Luz'}"
      });
      this.crearBloqueAccion('ComerBanana', {
        descripcion: 'Їсти банан',
        icono: 'icono.banana.png',
        comportamiento: 'Recolectar',
        argumentos: "{etiqueta: 'BananaAnimada', nombreAnimacion: \"comerBanana\"}"
      });
      this.crearBloqueAccion('ComerManzana', {
        descripcion: 'Їсти яблуко',
        icono: 'icono.manzana.png',
        comportamiento: 'Recolectar',
        argumentos: "{etiqueta: 'ManzanaAnimada', nombreAnimacion: \"comerManzana\"}"
      });
      this.crearBloqueAccion('ComerQueso', {
        descripcion: 'Їсти сир',
        icono: 'queso.png',
        comportamiento: 'Recolectar',
        argumentos: '{etiqueta: "QuesoAnimado"}'
      });
      this.crearBloqueAccion('ComerNaranja', {
        descripcion: 'Їсти апельсин',
        icono: 'naranja.png',
        comportamiento: 'Recolectar',
        argumentos: '{\'etiqueta\' : \'NaranjaAnimada\',  nombreAnimacion: "comerNaranja"}'
      });
      this.crearBloqueAccion('MoverACasillaDerecha', {
        descripcion: 'Рухатись праворуч',
        icono: 'icono.derecha.png',
        comportamiento: 'MoverACasillaDerecha',
        argumentos: '{}'
      });
      this.crearBloqueAccion('MoverACasillaIzquierda', {
        descripcion: 'Рухатись ліворуч',
        icono: 'icono.izquierda.png',
        comportamiento: 'MoverACasillaIzquierda',
        argumentos: '{}'
      });
      this.crearBloqueAccion('MoverACasillaArriba', {
        descripcion: 'Рухатись вгору',
        icono: 'icono.arriba.png',
        comportamiento: 'MoverACasillaArriba',
        argumentos: '{}'
      });
      this.crearBloqueAccion('MoverACasillaAbajo', {
        descripcion: 'Рухатись вниз',
        icono: 'icono.abajo.png',
        comportamiento: 'MoverACasillaAbajo',
        argumentos: '{}'
      });
      this.crearBloqueAccion('LevantaTuerca', {
        descripcion: 'Взяти гайку',
        icono: 'tuerca.png',
        comportamiento: 'Recolectar',
        argumentos: '{etiqueta: "TuercaAnimada", mensajeError: "Тут немає гайки", pasos: 50}'
      });
      this.crearBloqueAccion('Saludar', {
        descripcion: 'Привітати',
        icono: 'icono.saludar.png',
        comportamiento: 'ComportamientoAnimado',
        argumentos: '{nombreAnimacion: "saludando", idTransicion: "saludar"}'
      });
      this.crearBloqueAccion('AbrirOjos', {
        descripcion: 'Відкриті очі',
        icono: 'icono.abrirOjos.png',
        comportamiento: 'AnimarSiNoEstoyYa',
        argumentos: '{nombreAnimacion: "abrirOjos", valorEstar: "con los ojos abiertos", descripcionEstar: "estadoOjos", nombreAnimacionSiguiente: "parado", arrancoAsi:true, idTransicion: "abrirOjos"}'
      });
      this.crearBloqueAccion('CerrarOjos', {
        descripcion: 'Заплющити очі',
        icono: 'icono.cerrarOjos.png',
        comportamiento: 'AnimarSiNoEstoyYa',
        argumentos: '{nombreAnimacion: "cerrarOjos", valorEstar: "con los ojos cerrados", descripcionEstar: "estadoOjos", nombreAnimacionSiguiente: "ojosCerrados", idTransicion: "cerrarOjos"}'
      });
      this.crearBloqueAccion('Acostarse', {
        descripcion: 'Лягти',
        icono: 'icono.acostarse.png',
        comportamiento: 'ModificarRotacionYAltura',
        argumentos: '{alturaIr: -180 ,rotacionIr: 90, nombreAnimacion:"acostado", valorEstar: "acostado", descripcionEstar: "posicionCuerpo", idTransicion: "acostarse"}'
      });
      this.crearBloqueAccion('Pararse', {
        descripcion: 'Встати',
        icono: 'icono.pararse.png',
        comportamiento: 'ModificarRotacionYAltura',
        argumentos: '{alturaIr: -150 ,rotacionIr: 0, nombreAnimacion:"acostado", valorEstar: "parado", descripcionEstar: "posicionCuerpo", arrancoAsi:true, idTransicion: "levantarse"}'
      });
      this.crearBloqueAccion('Volver', {
        descripcion: 'Повернутись',
        icono: 'icono.izquierda.png',
        comportamiento: 'MovimientoAnimado',
        argumentos: '{direccion: [-1,0], distancia: 50, idTransicion: "volver"}'
      });
      this.crearBloqueAccion('Avanzar', {
        descripcion: 'Вперед',
        icono: 'icono.derecha.png',
        comportamiento: 'MovimientoAnimado',
        argumentos: '{direccion: [1,0], distancia: 50, idTransicion: "avanzar"}'
      });
      this.crearBloqueAccion('Soniar', {
        descripcion: 'Спати',
        icono: 'icono.soniar.png',
        comportamiento: 'Pensar',
        argumentos: '{mensaje: "ZZzzZzZ...", hayQueAnimar: false, idTransicion: "soniar"}'
      });
      this.crearBloqueAccion('SaltarHablando', {
        descripcion: 'Стрибати',
        icono: 'icono.arriba.png',
        comportamiento: 'SaltarHablando',
        argumentos: "{\n        velocidad_inicial: 30,\n        alturaDeseada: 150,\n        cantPasos: 20,\n        velocidad: 50\n      }"
      });
      this.crearBloqueAccion('VolverABordeIzquierdo', {
        descripcion: 'Перейти до лівого краю',
        icono: 'icono.izquierdaTope.png',
        comportamiento: 'MoverTodoAIzquierda',
        argumentos: '{}'
      });
      this.crearBloqueAccion('TomarEstrella', {
        descripcion: 'Взяти зірку',
        icono: 'icono.estrella.png',
        comportamiento: 'Recolectar',
        argumentos: '{etiqueta: "EstrellaAnimada", "mensajeError": "Тут немає жодної зірки"}'
      });
      this.crearBloqueAccion('MorderSandia', {
        descripcion: 'Їсти кавун',
        icono: 'icono.sandia.png',
        comportamiento: 'Recolectar',
        argumentos: '{\'etiqueta\':\'SandiaAnimada\', \'mensajeError\': \'Тут немає кавуна\'}'
      });
      this.crearBloqueAccion('AlimentarPez', {
        descripcion: 'Годувати рибу',
        icono: 'icono.pez.png',
        comportamiento: 'Recolectar',
        argumentos: '{etiqueta: "PezAnimado", idTransicion: "alimentarPez"}'
      });
      this.crearBloqueAccion('AgarrarComida', {
        descripcion: 'Взяти черв’яка',
        icono: 'icono.alimento_pez.png',
        comportamiento: 'Recolectar',
        argumentos: '{etiqueta: "AlimentoAnimado", idTransicion: "recogerComida"}'
      });
      this.crearBloqueAccion('PasarASiguienteComputadora', {
        descripcion: 'Перейти до наступного комп’ютера',
        icono: 'icono.derecha.png',
        comportamiento: 'MoverACasillaDerecha',
        argumentos: '{}'
      });
      this.crearBloqueAccion('PrenderComputadora', {
        descripcion: 'Увімкнути комп’ютер',
        icono: 'icono.turn_on.svg',
        comportamiento: 'PrenderComputadora',
        argumentos: '{}'
      });
      this.crearBloqueAccion('ApagarComputadora', {
        descripcion: 'Вимкнути комп’ютер',
        icono: 'icono.turn_off.svg',
        comportamiento: 'ApagarComputadora',
        argumentos: '{}'
      });
      this.crearBloqueAccion('InstalarJuego', {
        descripcion: 'Встановити гру',
        icono: 'icono.installation.svg',
        comportamiento: 'InstalarJuegoEnComputadora',
        argumentos: '{}'
      });
      this.crearBloqueAccion('EscribirA', {
        descripcion: 'Написати "А"',
        icono: 'icono.letter-a.svg',
        comportamiento: 'EscribirEnComputadora',
        argumentos: '{idTransicion: "escribirA"}'
      });
      this.crearBloqueAccion('EscribirB', {
        descripcion: 'Написати "B"',
        icono: 'icono.letter-b.svg',
        comportamiento: 'EscribirEnComputadora',
        argumentos: '{idTransicion: "escribirB"}'
      });
      this.crearBloqueAccion('EscribirC', {
        descripcion: 'Написати "C"',
        icono: 'icono.letter-c.svg',
        comportamiento: 'EscribirEnComputadora',
        argumentos: '{idTransicion : "escribirC"}'
      });
      this.crearBloqueAccion('AgarrarLlave', {
        descripcion: 'Взяти ключ',
        icono: 'icono.llave.png',
        comportamiento: 'Sostener',
        argumentos: "{\n        etiqueta: \"LlaveAnimado\",\n        idTransicion: \"agarrarLlave\"\n      }"
      });
      this.crearBloqueAccion('AbrirCofre', {
        descripcion: 'Відкрити скриню',
        icono: 'icono.cofre.png',
        comportamiento: 'Soltar',
        argumentos: "{\n        etiqueta: \"CofreAnimado\",\n        queSoltar: \"LlaveAnimado\",\n        animacionInteractuadoAlFinal: \"abrir\",\n        idTransicion: \"abrirCofre\"\n      }"
      });
      this.crearBloqueAccion('DarSombrero', {
        descripcion: 'Дати капелюх',
        icono: 'icono.sombrero.png',
        comportamiento: 'Interactuar',
        argumentos: "{\n        etiqueta: \"MagoAnimado\",\n        nombreAnimacion: \"cambiarSombreroPorEspada\",\n        animacionInteractuadoMientras: \"darEspada\",\n        idTransicion: \"darSombrero\"\n      }"
      });
      this.crearBloqueAccion('AtacarConEspada', {
        id: 'Atacarconespada',
        descripcion: 'Атака мечем',
        icono: 'icono.espada.png',
        comportamiento: 'SecuenciaAnimada',
        argumentos: "{\n        idTransicion: \"atacarConEspada\",\n        secuencia: [\n          {\n            comportamiento: \"Interactuar\",\n            argumentos: {\n              etiqueta: \"CaballeroAnimado\",\n              animacionInteractuadoMientras: \"defender\",\n              nombreAnimacion:\"atacar\"\n            }\n          },\n          {\n            comportamiento: \"Sostener\",\n            argumentos: {\n              etiqueta:\"Principe\"\n            }\n          }\n        ]\n      }"
      });
      this.crearBloqueAccion('EscaparEnUnicornio', {
        descripcion: 'Втеча на єдинорозі',
        icono: 'icono.unicornio.png',
        comportamiento: 'Escapar',
        argumentos: "{\n        escaparCon: \"unicornio\"\n      }"
      });
      this.crearBloqueAccion('Escapar', {
        descripcion: 'Втеча',
        comportamiento: 'Escapar',
        argumentos: "{\n        receptor: \"nave\",\n        escaparCon: \"automata\"\n      }"
      });
      this.crearBloqueAccion('TomarHierro', {
        descripcion: 'Захопити залізо',
        icono: 'icono.hierro.png',
        comportamiento: 'Sostener',
        argumentos: "{\n        etiqueta: \"HierroAnimado\",\n        nombreAnimacion: \"recogerHierro\"\n      }"
      });
      this.crearBloqueAccion('TomarCarbon', {
        descripcion: 'Захопити вугілля',
        id: 'TomarCarbon',
        icono: 'icono.carbon.png',
        comportamiento: 'Sostener',
        argumentos: "{\n        etiqueta: \"CarbonAnimado\",\n        nombreAnimacion: \"recogerCarbon\"\n      }"
      });
      this.crearBloqueAccion('PrenderFogata', {
        descripcion: 'Розкласти багаття',
        icono: 'icono.FogataPrendida.png',
        comportamiento: 'Interactuar',
        argumentos: "{\n        etiqueta: \"FogataAnimada\",\n        nombreAnimacion: \"prender\",\n        animacionInteractuadoAlFinal: \"prendida\"\n      }"
      });
      this.crearBloqueAccion('Depositar', {
        descripcion: 'Покласти на корабель',
        comportamiento: 'Soltar',
        argumentos: "{\n        idTransicion: \"depositar\",\n        etiqueta: \"NaveAnimada\"\n      }"
      });
      this.crearBloqueAccion('AvanzarMono', {
        descripcion: 'Рухатися праворуч',
        icono: 'icono.derecha.png',
        comportamiento: 'MoverACasillaDerecha',
        argumentos: '{velocidad: 25}'
      });
      this.crearBloqueAccion('DejarRegalo', {
        descripcion: 'Залишити подарунок',
        icono: 'icono.regalo.png',
        comportamiento: 'Depositar',
        argumentos: '{claseADepositar: "RegaloAnimado"}'
      });
      this.crearBloqueAccion('SiguienteFila', {
        descripcion: 'Перехід до наступного ряду',
        icono: 'icono.abajo.png',
        comportamiento: 'SiguienteFila',
        argumentos: '{}'
      });
      this.crearBloqueAccion('SiguienteFilaTotal', {
        descripcion: 'Перехід до наступного ряду',
        icono: 'icono.izquierdaAbajo.png',
        comportamiento: 'SecuenciaAnimada',
        argumentos: "{secuencia: [\n        {\n          comportamiento: \"MoverTodoAIzquierda\",\n          argumentos: {}\n        },\n        {\n          comportamiento: \"MoverACasillaAbajo\",\n          argumentos: {}\n        }\n      ]}"
      });
      this.crearBloqueAccion('SiguienteColumna', {
        descripcion: 'Перехід до наступного стовпця',
        icono: 'icono.derecha.png',
        comportamiento: 'SiguienteColumna',
        argumentos: '{}'
      });
      this.crearBloqueAccion('ContarBanana', {
        descripcion: 'Порахувати банан',
        icono: 'icono.banana.png',
        comportamiento: 'Contar',
        argumentos: '{etiqueta: "BananaAnimada", nombreAnimacion: "comerBanana"}'
      });
      this.crearBloqueAccion('ContarManzana', {
        descripcion: 'Порахувати яблуко',
        icono: 'icono.manzana.png',
        comportamiento: 'Contar',
        argumentos: '{etiqueta: "ManzanaAnimada", nombreAnimacion: "comerManzana"}'
      });
      this.crearBloqueAccion('ExplotarGlobo', {
        descripcion: 'Псувати кулю',
        icono: 'icono.globo.png',
        comportamiento: 'Interactuar',
        argumentos: "{\n        etiqueta: \"GloboAnimado\",\n        nombreAnimacion: \"recoger\",\n        idTransicion: \"explotar\",\n        comportamientoAdicional: 'Eliminar',\n        argumentosComportamiento: {\n          nombreAnimacion: \"explotar\"\n        }}"
      });
      var blockly = this.blockly;
      var bloque = blockly.createCustomBlock('MoverA', {
        message0: "Рухатись %1",
        colour: Blockly.Blocks.primitivas.COLOUR,
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        args0: [{
          "type": "input_value",
          "name": "direccion"
        }],
        code: 'hacer(actor_id, "MovimientoEnCuadricula", {direccionCasilla: $direccion});'
      });
      bloque.categoria = "Команди";
      this.crearBloqueAccion('PatearPelota', {
        descripcion: 'Вдарити м\'яч',
        icono: 'icono.pelota.png',
        comportamiento: 'Interactuar',
        argumentos: "{\n        etiqueta: \"PelotaAnimada\",\n        idTransicion: \"patear\",\n        comportamientoAdicional: 'SerPateado',\n        argumentosComportamiento: {\n          tiempoEnElAire:25,\n          aceleracion:0.0025,\n          elevacionMaxima:25,\n          gradosDeAumentoStep:-2\n        }\n      }"
      });
      this.crearBloqueAccion('Avanzar1km', {
        descripcion: 'Вперед 1 км',
        icono: 'icono.derecha.png',
        comportamiento: 'VolarHeroicamente',
        argumentos: '{}'
      });
      this.crearBloqueAccion('CambiarColor', {
        descripcion: 'Змінити колір ліхтаря',
        icono: 'icono.cambiar.color.png',
        comportamiento: 'CambiarColor',
        argumentos: '{}'
      });
      this.crearBloqueAccion('SiguienteFoco', {
        descripcion: 'Перейти до наступного ліхтаря',
        icono: 'icono.derecha.png',
        comportamiento: 'MoverACasillaDerecha',
        argumentos: '{}'
      });
      this.crearBloqueAccion('EmpezarFiesta', {
        descripcion: 'З\'явитись перед гостями',
        icono: 'icono.empezar.fiesta.png',
        comportamiento: 'EmpezarFiesta',
        argumentos: '{idTransicion: "empezarFiesta"}'
      });
      this.crearBloqueAccion('VolverAlBordeIzquierdo', {
        descripcion: 'Повернутись до лівого краю',
        icono: 'icono.izquierdaTope.png',
        comportamiento: 'MoverTodoAIzquierda',
        argumentos: '{}'
      });
      this.crearBloqueAccion('IrAlPrimerSospechoso', {
        descripcion: 'Перейти до першого підозрюваного',
        icono: 'icono.izquierda.png',
        comportamiento: 'MoverTodoAIzquierda',
        argumentos: '{}'
      });
      this.crearBloqueAccion('IrAlSiguienteSospechoso', {
        descripcion: 'Перейти до наступного підозрюваного',
        icono: 'icono.derecha.png',
        comportamiento: 'MoverACasillaDerecha',
        argumentos: '{}'
      });
      this.crearBloqueAccion('InterrogarSospechoso', {
        descripcion: 'Запитати підозюваного',
        icono: 'icono.sacar.disfraz.png',
        comportamiento: 'SacarDisfraz',
        argumentos: '{}'
      });
      blockly.createCustomBlock('SaltarHaciaAdelante', {
        message0: "%1 Стрибок вперед %2",
        colour: Blockly.Blocks.primitivas.COLOUR,
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        args0: [{
          "type": "field_image",
          "src": "iconos/icono.arriba.png",
          "width": 16,
          "height": 20,
          "alt": "*"
        }, {
          "type": "input_value",
          "name": "longitud"
        }],
        code: 'hacer(actor_id, "SaltarHaciaAdelante", {distancia: $longitud, alturaDeseada: 50, velocidad_inicial: 20, nombreAnimacion: "saltar"});'
      });
      Blockly.Blocks.SaltarHaciaAdelante.toolbox = "\n    <block type=\"SaltarHaciaAdelante\">\n      <value name=\"longitud\">\n        <block type=\"math_number\"><field name=\"NUM\">100</field></block></value>\n    </block>\n  ";
      Blockly.Blocks.SaltarHaciaAdelante.categoria = 'Команди';
      blockly.createCustomBlock('DibujarLado', {
        message0: "%1 Малювати %2",
        colour: Blockly.Blocks.primitivas.COLOUR,
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        args0: [{
          "type": "field_image",
          "src": "iconos/icono.DibujarLinea.png",
          "width": 16,
          "height": 16,
          "alt": "*"
        }, {
          "type": "input_value",
          "name": "longitud"
        }],
        code: 'hacer(actor_id, "DibujarHaciaAdelante", {distancia: $longitud, voltearAlIrAIzquierda: false, velocidad: 60});'
      });
      Blockly.Blocks.DibujarLado.toolbox = "\n      <block type=\"DibujarLado\">\n        <value name=\"longitud\">\n          <block type=\"math_number\"><field name=\"NUM\">100</field></block></value>\n      </block>\n    ";
      Blockly.Blocks.DibujarLado.categoria = 'Команди';
      this.crearBloqueAccion('ComerChurrasco', {
        descripcion: 'Їсти м\'ясо',
        icono: 'icono.churrasco.png',
        comportamiento: 'Recolectar',
        argumentos: '{etiqueta:"Churrasco", nombreAnimacion: "comerChurrasco", animacionInteractuadoMientras: "desaparecer"}'
      });
      this.crearBloqueAccion('AgarrarTomate', {
        descripcion: 'Взяти томат',
        icono: 'icono.tomate.png',
        comportamiento: 'Recolectar',
        argumentos: "{\n        etiqueta: \"Tomate\",\n        nombreAnimacion: \"agarrarTomate\",\n        animacionInteractuadoMientras: \"desaparecer\",\n        idTransicion: \"agarrarTomate\"\n        \n      }"
      });
      this.crearBloqueAccion('AgarrarLechuga', {
        descripcion: 'Взяти салат',
        icono: 'icono.lechuga.png',
        comportamiento: 'Recolectar',
        argumentos: "{\n        etiqueta: \"Lechuga\",\n        nombreAnimacion: \"agarrarLechuga\",\n        animacionInteractuadoMientras: \"desaparecer\",\n        idTransicion: \"agarrarLechuga\"\n      }"
      });
      this.crearBloqueAccion('PrepararEnsalada', {
        descripcion: 'Приготувати обід',
        icono: 'icono.ensaladera.png',
        comportamiento: 'PrepararEnsalada',
        argumentos: "{}"
      }); // Para los desafíos de escribir y leer letras

      this.crearBloqueAccion('EscribirLetraActualEnOtraCuadricula', {
        descripcion: 'Писати літеру, яку я кажу',
        icono: 'icono.DibujarLinea.png',
        comportamiento: 'EscribirLetraActualEnOtraCuadricula',
        argumentos: '{}'
      });
      blockly.createCustomBlock('EscribirTextoDadoEnOtraCuadricula', {
        message0: "%1 Писати: %2",
        colour: Blockly.Blocks.primitivas.COLOUR,
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        args0: [{
          "type": "field_image",
          "src": "iconos/icono.DibujarLinea.png",
          "width": 16,
          "height": 16,
          "alt": "*"
        }, {
          "type": "field_input",
          "name": "texto",
          "text": ""
        }]
      });
      Blockly.Blocks.EscribirTextoDadoEnOtraCuadricula.categoria = 'Команди';

      Blockly.MyLanguage.EscribirTextoDadoEnOtraCuadricula = function (block) {
        return 'hacer(actor_id, "EscribirTextoDadoEnOtraCuadricula", {texto: "' + (block.getFieldValue('texto') || '') + '"});';
      };

      blockly.createCustomBlock('GirarGrados', {
        message0: "%1 Поворот на %2 градус",
        colour: Blockly.Blocks.primitivas.COLOUR,
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        args0: [{
          "type": "field_image",
          "src": "iconos/icono.Girar.png",
          "width": 16,
          "height": 16,
          "alt": "*"
        }, {
          "type": "input_value",
          "name": "grados"
        }],
        code: 'hacer(actor_id, "Rotar", {angulo: - ($grados), voltearAlIrAIzquierda: false, velocidad: 60});'
      });
      Blockly.Blocks.GirarGrados.toolbox = "\n      <block type=\"GirarGrados\">\n        <value name=\"grados\">\n          <block type=\"math_number\"><field name=\"NUM\">90</field></block></value>\n      </block>\n    ";
      Blockly.Blocks.GirarGrados.categoria = 'Команди';
      this.crearBloqueAccion('MoverArribaDibujando', {
        descripcion: 'Рухатись малюючи вгору',
        icono: 'icono.arribaDibujando.png',
        comportamiento: 'DibujarLinea',
        argumentos: '{direccion: [0,1], nombreAnimacion: "correrDibujando", dibujarPuntos: true}'
      });
      this.crearBloqueAccion('MoverAbajoDibujando', {
        descripcion: 'Рухатись малюючи вниз',
        icono: 'icono.abajoDibujando.png',
        comportamiento: 'DibujarLinea',
        argumentos: '{direccion: [0,-1], nombreAnimacion: "correrDibujando", dibujarPuntos: true}'
      });
      this.crearBloqueAccion('MoverDerechaDibujando', {
        descripcion: 'Рухатись малюючи праворуч',
        icono: 'icono.derechaDibujando.png',
        comportamiento: 'DibujarLinea',
        argumentos: '{direccion: [1,0], nombreAnimacion: "correrDibujando", dibujarPuntos: true}'
      });
      this.crearBloqueAccion('MoverIzquierdaDibujando', {
        descripcion: 'Рухатись малюючи ліворуч',
        icono: 'icono.izquierdaDibujando.png',
        comportamiento: 'DibujarLinea',
        argumentos: '{direccion: [-1,0], nombreAnimacion: "correrDibujando", dibujarPuntos: true}'
      });
      this.crearBloqueAccion('SaltarArriba', {
        descripcion: 'Стрибати вгору',
        icono: 'icono.arriba.png',
        comportamiento: 'SaltarAnimado',
        argumentos: '{direccion: [0,1], distancia: 50, alturaDeseada: 50, velocidad_inicial: 20, nombreAnimacion: "saltar"}'
      });
      this.crearBloqueAccion('SaltarAbajo', {
        descripcion: 'Стрибати вниз',
        icono: 'icono.abajo.png',
        comportamiento: 'SaltarAnimado',
        argumentos: '{direccion: [0,-1], distancia: 50, alturaDeseada: 50, velocidad_inicial: 20, nombreAnimacion: "saltar"}'
      });
      this.crearBloqueAccion('SaltarDerecha', {
        descripcion: 'Стрибати праворуч',
        icono: 'icono.derecha.png',
        comportamiento: 'SaltarAnimado',
        argumentos: '{direccion: [1,0], distancia: 50, alturaDeseada: 50, velocidad_inicial: 20, nombreAnimacion: "saltar"}'
      });
      this.crearBloqueAccion('SaltarIzquierda', {
        descripcion: 'Стрибати ліворуч',
        icono: 'icono.izquierda.png',
        comportamiento: 'SaltarAnimado',
        argumentos: '{direccion: [-1,0], distancia: 50, alturaDeseada: 50, velocidad_inicial: 20, nombreAnimacion: "saltar"}'
      });
      this.crearBloqueAccion('MoverLeyendoDerecha', {
        descripcion: 'Рухатись праворуч',
        icono: 'icono.derecha.png',
        comportamiento: 'MoverLeyendoDerecha',
        argumentos: '{}'
      });
      this.crearBloqueAccion('MoverLeyendoIzquierda', {
        descripcion: 'Рухатись ліворуч',
        icono: 'icono.izquierda.png',
        comportamiento: 'MoverLeyendoIzquierda',
        argumentos: '{}'
      });
      this.crearBloqueAccion('MoverLeyendoArriba', {
        descripcion: 'Рухайтись вгору',
        icono: 'icono.arriba.png',
        comportamiento: 'MoverLeyendoArriba',
        argumentos: '{}'
      });
      this.crearBloqueAccion('MoverLeyendoAbajo', {
        descripcion: 'Рухайтись вниз',
        icono: 'icono.abajo.png',
        comportamiento: 'MoverLeyendoAbajo',
        argumentos: '{}'
      });
    },
    _definirBloquesSensores: function _definirBloquesSensores() {
      this.crearBloqueSensor('TocandoBanana', {
        descripcion: 'Тут банан',
        icono: 'icono.banana.png',
        funcionSensor: 'tocando("BananaAnimada")',
        esBool: true
      });
      this.crearBloqueSensor('TocandoManzana', {
        descripcion: 'Тут яблуко',
        icono: 'icono.manzana.png',
        funcionSensor: 'tocando("ManzanaAnimada")',
        esBool: true
      });
      this.crearBloqueSensor('TocandoNaranja', {
        descripcion: 'Тут апельсин',
        icono: 'icono.naranja.png',
        funcionSensor: 'tocando("NaranjaAnimada")',
        esBool: true
      });
      this.crearBloqueSensor('TocandoFogata', {
        descripcion: 'Тут дрова',
        icono: 'icono.FogataApagada.png',
        funcionSensor: 'tocando("FogataAnimada")',
        esBool: true
      });
      this.crearBloqueSensor('TocandoInicio', {
        descripcion: 'Я на початку',
        icono: 'icono.futbolInicio.png',
        funcionSensor: 'tocandoInicio()',
        esBool: true
      });
      this.crearBloqueSensor('TocandoPelota', {
        descripcion: 'Натрапив на м\'яч',
        icono: 'icono.pelota.png',
        funcionSensor: 'tocando("PelotaAnimada")',
        esBool: true
      });
      this.crearBloqueSensor('TocandoFinal', {
        descripcion: 'Я досяг кінця',
        icono: 'icono.titoFinalizacion.png',
        funcionSensor: 'estoyUltimaFila()',
        esBool: true
      });
      this.crearBloqueSensor('KmsTotales', {
        descripcion: 'Потрібно кілометрів',
        icono: 'icono.kms.png',
        funcionSensor: 'kmsTotales()'
      });
      this.crearBloqueSensor('EstoyEnEsquina', {
        descripcion: 'Я в кутку',
        icono: 'icono.prendiendoLasCompus2.png',
        funcionSensor: 'casillaActual().esEsquina()',
        esBool: true
      });
      this.crearBloqueSensor('EstoySobreElInicio', {
        descripcion: 'Я на початку стовпця',
        icono: 'icono.casillainiciomono.png',
        funcionSensor: 'casillaActual().esInicio()',
        esBool: true
      });
      this.crearBloqueSensor('EstoySobreElFinal', {
        descripcion: 'Я в кінці стовпця',
        icono: 'icono.casillafinalmono.png',
        funcionSensor: 'casillaActual().esFin()',
        esBool: true
      });
      this.crearBloqueSensor('LargoColumnaActual', {
        descripcion: 'Довжина стовпця',
        icono: 'icono.largoCol.png',
        funcionSensor: 'largoColumnaActual()-1'
      });
      this.crearBloqueSensor('TocandoAbajo', {
        descripcion: 'Можу рухатись вниз',
        icono: 'icono.abajo.png',
        funcionSensor: 'tocandoFlechaAbajo()',
        esBool: true
      });
      this.crearBloqueSensor('TocandoDerecha', {
        descripcion: 'Можу рухатись праворуч',
        icono: 'icono.derecha.png',
        funcionSensor: 'tocandoFlechaDerecha()',
        esBool: true
      });
      this.crearBloqueSensor('TocandoFinCamino', {
        descripcion: 'Досяг мети',
        icono: 'icono.finCamino.png',
        funcionSensor: 'alFinalDelCamino()',
        esBool: true
      });
      this.crearBloqueSensor('TocandoQueso', {
        descripcion: 'Тут сир',
        icono: 'queso.png',
        funcionSensor: 'tocando("QuesoAnimado")',
        esBool: true
      });
      this.crearBloqueSensor('TocandoLuz', {
        descripcion: 'Тут лампочка',
        icono: 'icono.LamparitaApagada.png',
        funcionSensor: 'tocando("Lamparin")',
        esBool: true
      });
      this.crearBloqueSensor('EsCulpable', {
        id: 'Descubralculpable',
        descripcion: 'Зіткнувся з винуватцем',
        icono: 'icono.culpable.png',
        funcionSensor: 'colisionaConElCulpable() && pilas.escena_actual().culpable.teEncontraron()',
        esBool: true
      });
      this.crearBloqueSensor('HayChurrasco', {
        descripcion: 'Тут є м\'ясо',
        icono: 'icono.churrasco.png',
        funcionSensor: 'tocando("Churrasco")',
        esBool: true
      });
      this.crearBloqueSensor('HayObstaculoArriba', {
        descripcion: 'Вище перешкода',
        icono: 'icono.arriba.png',
        funcionSensor: 'tieneEnLaCasillaDeArriba("Obstaculo")',
        esBool: true
      });
      this.crearBloqueSensor('HayObstaculoAbajo', {
        descripcion: 'Знизу перешкода',
        icono: 'icono.abajo.png',
        funcionSensor: 'tieneEnLaCasillaDeAbajo("Obstaculo")',
        esBool: true
      });
      this.crearBloqueSensor('HayObstaculoIzquierda', {
        descripcion: 'Лворуч перешкода',
        icono: 'icono.izquierda.png',
        funcionSensor: 'tieneEnLaCasillaASuIzquierda("Obstaculo")',
        esBool: true
      });
      this.crearBloqueSensor('HayObstaculoDerecha', {
        descripcion: 'Праворуч перешкода',
        icono: 'icono.derecha.png',
        funcionSensor: 'tieneEnLaCasillaASuDerecha("Obstaculo")',
        esBool: true
      });
      this.crearBloqueSensor('HayCharco', {
        descripcion: 'Тут калюжа',
        icono: 'icono.charco.png',
        funcionSensor: 'hayEnEscena("Charco")',
        esBool: true
      });
      var sensorHayVocal = this.blockly.createCustomBlock('hayVocalRMT', {
        "type": "block_type",
        "message0": "%1 Поточна літера є %2 ?",
        "args0": [{
          type: "field_image",
          src: "iconos/icono.DibujarLinea.png",
          width: 16,
          height: 16,
          alt: "*"
        }, {
          "type": "field_dropdown",
          "name": "letra",
          "options": [["R", "r"], ["M", "m"], ["T", "t"], ["A", "a"], ["E", "e"], ["I", "i"], ["O", "o"], ["U", "u"]]
        }],
        "output": null,
        "colour": Blockly.Blocks.sensores.COLOUR,
        "tooltip": "Es cierto cuando estoy leyendo esta letra ahora",
        "helpUrl": ""
      });
      sensorHayVocal.categoria = "Sensores";

      Blockly.MyLanguage.hayVocalRMT = function (block) {
        var codigo = "evaluar(\"leyendoCaracter('".concat(block.getFieldValue('letra'), "')\")");
        return [codigo, Blockly.MyLanguage.ORDER_ATOMIC];
      };

      this.crearBloqueSensor('HayLechuga', {
        descripcion: 'Тут салат',
        icono: 'icono.lechuga.png',
        funcionSensor: 'tocando("Lechuga")',
        esBool: true
      });
      this.crearBloqueSensor('HayTomate', {
        descripcion: 'Тут томат',
        icono: 'icono.tomate.png',
        funcionSensor: 'tocando("Tomate")',
        esBool: true
      });
    },
    _definirBloquesQueRepresentanValores: function _definirBloquesQueRepresentanValores() {
      this.crearBloqueValor("ParaLaDerecha", {
        descripcion: 'праворуч',
        icono: 'icono.derecha.png',
        valor: 'derecha',
        colour: Blockly.Blocks.direcciones.COLOUR
      });
      this.crearBloqueValor('ParaLaIzquierda', {
        descripcion: 'ліворуч',
        icono: 'icono.izquierda.png',
        valor: 'izquierda',
        colour: Blockly.Blocks.direcciones.COLOUR
      });
      this.crearBloqueValor('ParaArriba', {
        descripcion: 'вгору',
        icono: 'icono.arriba.png',
        valor: 'arriba',
        colour: Blockly.Blocks.direcciones.COLOUR
      });
      this.crearBloqueValor('ParaAbajo', {
        descripcion: 'вниз',
        icono: 'icono.abajo.png',
        valor: 'abajo',
        colour: Blockly.Blocks.direcciones.COLOUR
      });
    },
    _definirBloquesIniciales: function _definirBloquesIniciales() {
      function fillOpacity(block, opacity) {
        block.getSvgRoot().style["fill-opacity"] = opacity;
      }

      function transparent(block) {
        fillOpacity(block, 0);
      }

      function opaque(block) {
        fillOpacity(block, 1);
      }

      function onChangeRequired(warningText) {
        return function (event) {
          if (event && event.runCode) {
            this.setWarningText(warningText);
            opaque(this);
          }

          if (this.warning && this.warning.bubble_) this.warning.bubble_.setColour('red');
        };
      }

      Blockly.Blocks.required_value = {
        init: function init() {
          this.jsonInit({
            "type": "required_value",
            "message0": "",
            "output": null,
            "colour": "#ffffff",
            "tooltip": "",
            "helpUrl": ""
          });
          this.setShadow(true);
          transparent(this);
        },
        onchange: onChangeRequired("Тут бракує блоку виразів!")
      };
      Blockly.Blocks.required_statement = {
        init: function init() {
          this.jsonInit({
            "type": "required_statement",
            "message0": "",
            "previousStatement": null,
            "colour": "#ffffff",
            "tooltip": "",
            "helpUrl": ""
          });
          this.setShadow(true);
          transparent(this);
        },
        onchange: onChangeRequired("Тут відсутні командні блоки!")
      };
      Blockly.Blocks.al_empezar_a_ejecutar = {
        init: function init() {
          this.setColour(Blockly.Blocks.eventos.COLOUR);
          this.appendDummyInput().appendField('Коли розпочнемо');
          this.appendStatementInput('program');
          this.setDeletable(false);
          this.setEditable(false);
          this.setMovable(false);
        }
      };
    },
    _definirBloquesEstructurasDeControl: function _definirBloquesEstructurasDeControl() {
      Blockly.Blocks.RepetirVacio = {
        init: function init() {
          this.setColour(Blockly.Blocks.control.COLOUR);
          this.setInputsInline(true);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.appendValueInput('count').setCheck('Number').appendField('Повторити');
          this.appendDummyInput().appendField('раз');
          this.appendStatementInput('block');
        },
        categoria: 'Повторення'
      };
      Blockly.Blocks.Repetir = {
        init: Blockly.Blocks['RepetirVacio'].init,
        categoria: Blockly.Blocks['RepetirVacio'].categoria,
        toolbox: "\n      <block type=\"repetir\">\n        <value name=\"count\">\n          <block type=\"math_number\"><field name=\"NUM\">10</field></block>\n        </value>\n      </block>\n      "
      };
      Blockly.Blocks.Hasta = {
        init: function init() {
          this.setColour(Blockly.Blocks.control.COLOUR);
          this.setInputsInline(true);
          this.appendValueInput('condition').setCheck('Boolean').appendField('Повторювати поки');
          this.appendStatementInput('block');
          this.setPreviousStatement(true);
          this.setNextStatement(true);
        },
        categoria: 'Повторення'
      };
      Blockly.Blocks.Si = {
        init: function init() {
          this.setColour(Blockly.Blocks.control.COLOUR);
          this.appendValueInput('condition').setCheck('Boolean').appendField('Якщо');
          this.setInputsInline(true);
          this.appendStatementInput('block');
          this.setPreviousStatement(true);
          this.setNextStatement(true);
        },
        categoria: 'Перевірка умов'
      };
      Blockly.Blocks.SiNo = {
        init: function init() {
          this.setColour(Blockly.Blocks.control.COLOUR);
          this.appendValueInput('condition').setCheck('Boolean').appendField('Якщо');
          this.appendStatementInput('block1');
          this.setInputsInline(true);
          this.appendDummyInput().appendField('інакше');
          this.appendStatementInput('block2');
          this.setPreviousStatement(true);
          this.setNextStatement(true);
        },
        categoria: 'Перевірка умов'
      };
      var init_base_callnoreturn = Blockly.Blocks.procedures_callnoreturn.init;

      Blockly.Blocks.procedures_callnoreturn.init = function () {
        this.setInputsInline(true);
        init_base_callnoreturn.call(this);
      };

      Blockly.Blocks.procedures_callnoreturn.onchange = function () {
        requiredAllInputs(this); // Input fields are added after instantiation 
      };

      function isInsideProcedureDef(paramBlock) {
        return paramBlock.getRootBlock().id === paramBlock.$parent;
      }

      function hasParam(procedureBlock, paramBlock) {
        return getParams(procedureBlock).includes(paramBlock.getFieldValue('VAR'));
      }

      function isFlying(block) {
        return block.getRootBlock() === block;
      }

      function getName(procedureBlock) {
        return procedureBlock.getProcedureDef()[0];
      }

      function getParams(procedureBlock) {
        return procedureBlock.getProcedureDef()[1];
      }

      Blockly.Blocks.variables_get = {
        init: function init() {
          this.jsonInit({
            "type": "variables_get",
            "message0": "%1",
            "args0": [{
              "type": "field_label",
              "name": "VAR",
              "text": "nombre de variable"
            }],
            "output": null,
            "colour": Blockly.Blocks.variables.HUE,
            "tooltip": "",
            "helpUrl": ""
          });
        },
        mutationToDom: function mutationToDom() {
          var container = document.createElement('mutation');
          container.setAttribute('var', this.getFieldValue('VAR'));

          if (this.$parent) {
            container.setAttribute("parent", this.$parent);
          }

          return container;
        },
        domToMutation: function domToMutation(xmlElement) {
          var var_name = xmlElement.getAttribute('var');
          this.setFieldValue(var_name, 'VAR');
          this.$parent = xmlElement.getAttribute("parent") || null;
        },
        onchange: function onchange(event) {
          if (event && event.blockId === this.$parent && event.type === Blockly.Events.BLOCK_DELETE) {
            this.dispose();
            return;
          }

          if (this.$parent) {
            // Este if sirve para las soluciones viejas que no tienen $parent
            var procedureDef = this.workspace.getBlockById(this.$parent);
            var ok = isInsideProcedureDef(this) && hasParam(procedureDef, this);
            this.setDisabled(!ok);
            var warning = ok || isFlying(this) || !procedureDef ? null : hasParam(procedureDef, this) ? "Este bloque no puede usarse aqu\xED. Es un par\xE1metro que s\xF3lo puede usarse en ".concat(getName(procedureDef), ".") : "Este bloque ya no puede usarse, el parámetro ha sido eliminado.";
            this.setWarningText(warning);
          }
        }
      };
      Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "Визначити";
      var init_base_procedimiento = Blockly.Blocks.procedures_defnoreturn.init;

      Blockly.Blocks.procedures_defnoreturn.init = function () {
        init_base_procedimiento.call(this);
      };

      delete Blockly.Blocks.procedures_defreturn;
      delete Blockly.Blocks.procedures_ifreturn;
    },
    _generarLenguaje: function _generarLenguaje() {
      Blockly.MyLanguage = Blockly.JavaScript;
      Blockly.MyLanguage.addReservedWords('main', 'hacer', 'out_hacer', 'evaluar');

      Blockly.MyLanguage.required_value = function () {
        return null;
      };

      Blockly.MyLanguage.required_statement = function () {
        return null;
      };

      Blockly.MyLanguage.al_empezar_a_ejecutar = function (block) {
        var programa = Blockly.JavaScript.statementToCode(block, 'program');
        var codigo = "".concat(programa);
        return codigo;
      };

      Blockly.MyLanguage.RepetirVacio = function (block) {
        var repeats = Blockly.MyLanguage.valueToCode(block, 'count', Blockly.MyLanguage.ORDER_ASSIGNMENT) || '0';
        var branch = Blockly.MyLanguage.statementToCode(block, 'block');
        branch = Blockly.MyLanguage.addLoopTrap(branch, block.id);
        var code = '';
        var loopVar = Blockly.JavaScript.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);
        var endVar = repeats;

        if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
          endVar = Blockly.MyLanguage.variableDB_.getDistinctName('repeat_end', Blockly.Variables.NAME_TYPE);
          code += 'var ' + endVar + ' = ' + repeats + ';\n';
        }

        code += 'for (var ' + loopVar + ' = 0; ' + loopVar + ' < ' + endVar + '; ' + loopVar + '++) {\n' + branch + '}\n';
        return code;
      };

      Blockly.MyLanguage.Repetir = Blockly.MyLanguage.RepetirVacio;

      Blockly.MyLanguage.Si = function (block) {
        var condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
        var contenido = Blockly.MyLanguage.statementToCode(block, 'block');
        return "if (".concat(condition, ") {\n        ").concat(contenido, "\n      }");
      };

      Blockly.MyLanguage.SiNo = function (block) {
        var condition = Blockly.MyLanguage.valueToCode(block, 'condition', Blockly.MyLanguage.ORDER_ASSIGNMENT) || 'false';
        var bloque_1 = Blockly.JavaScript.statementToCode(block, 'block1');
        var bloque_2 = Blockly.JavaScript.statementToCode(block, 'block2');
        return "if (".concat(condition, ") {\n        ").concat(bloque_1, "\n      } else {\n        ").concat(bloque_2, "\n      }");
      };

      Blockly.MyLanguage.Hasta = function (block) {
        var condition = Blockly.MyLanguage.valueToCode(block, 'condition', Blockly.MyLanguage.ORDER_ASSIGNMENT) || 'false';
        var contenido = Blockly.MyLanguage.statementToCode(block, 'block');
        return "while (!".concat(condition, ") {\n        ").concat(contenido, "\n      }");
      };

      Blockly.MyLanguage.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
      Blockly.MyLanguage.addReservedWords('highlightBlock');
    },
    _definirOperaciones: function _definirOperaciones() {
      //Este código fue sacado de Blockly
      this.blockly.createCustomBlock('OpAritmetica', {
        "type": "math_arithmetic",
        "message0": "%1 %2 %3",
        "args0": [{
          "type": "input_value",
          "name": "A",
          "check": "Number"
        }, {
          "type": "field_dropdown",
          "name": "OP",
          "options": [["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"], ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"], ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"], ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"], ["%{BKY_MATH_POWER_SYMBOL}", "POWER"]]
        }, {
          "type": "input_value",
          "name": "B",
          "check": "Number"
        }],
        "inputsInline": true,
        "output": "Number",
        "colour": "%{BKY_MATH_HUE}",
        "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
        "extensions": ["math_op_tooltip"]
      });

      Blockly.MyLanguage.OpAritmetica = function (block) {
        // Basic arithmetic operators, and power.
        var OPERATORS = {
          'ADD': [' + ', Blockly.JavaScript.ORDER_ADDITION],
          'MINUS': [' - ', Blockly.JavaScript.ORDER_SUBTRACTION],
          'MULTIPLY': [' * ', Blockly.JavaScript.ORDER_MULTIPLICATION],
          'DIVIDE': [' / ', Blockly.JavaScript.ORDER_DIVISION],
          'POWER': [null, Blockly.JavaScript.ORDER_COMMA] // Handle power separately.

        };
        var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
        var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
        var op = block.getFieldValue('OP');
        var tuple = OPERATORS[op];
        var operator = tuple[0];
        var order = tuple[1];
        var isPow = !operator;
        var isDivision = op === 'DIVIDE';
        var code; // Power in JavaScript requires a special case since it has no operator.

        if (isPow) {
          code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
          return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
        }

        code = "\n      (function(){\n        if (".concat(isDivision, " && ").concat(argument1, " === 0)\n          evaluar(\"lanzarActividadError('No se puede dividir por 0')\")\n        else\n          return ").concat(argument0 + operator + argument1, "\n      })()\n      ");
        return [code, order];
      };

      Blockly.Blocks.OpAritmetica.categoria = 'Оператори';
    },
    _definirBloquesAlias: function _definirBloquesAlias() {
      this.crearBloqueAlias('OpComparacion', 'logic_compare', 'Оператори');
      this.crearBloqueAlias('OpAritmetica', 'math_arithmetic', 'Оператори');
      this.crearBloqueAlias('Booleano', 'logic_boolean', 'Величини');
      this.crearBloqueAlias('Numero', 'math_number', 'Величини');
      this.crearBloqueAlias('Texto', 'text', 'Valores');
      this.crearBloqueAlias('param_get', 'variables_get');
      this.crearBloqueAlias('Procedimiento', 'procedures_defnoreturn', 'Мої процедури', 'PROCEDURE');

      this._agregarAliasParaCompatibilidadHaciaAtras();
    },

    /**
     * Crea alias con nombres de bloques que fueron previamente usados
     * en pilas bloques, pero que han cambiado el nombre por otro actualmente.
     * Esto es necesario para mantener la retrocompatibilidad con ejercicios
     * que utilizan los bloques anteriormente citados.
     */
    _agregarAliasParaCompatibilidadHaciaAtras: function _agregarAliasParaCompatibilidadHaciaAtras() {
      this.crearBloqueAlias('si', 'Si');
      this.crearBloqueAlias('Sino', 'SiNo');
      this.crearBloqueAlias('sino', 'SiNo');
      this.crearBloqueAlias('Descubralculpable', 'EsCulpable');
      this.crearBloqueAlias('hasta', 'Hasta');
      this.crearBloqueAlias('repetir', 'Repetir');
      this.crearBloqueAlias('tocandoBanana', 'TocandoBanana');
      this.crearBloqueAlias('tocandoManzana', 'TocandoManzana');
      this.crearBloqueAlias('prenderCompuConColision', 'PrenderComputadora');
      this.crearBloqueAlias('PrenderCompuConColision', 'PrenderComputadora');
      this.crearBloqueAlias('Prendercompu', 'PrenderComputadora');
      this.crearBloqueAlias('PrenderCompu', 'PrenderComputadora');
      this.crearBloqueAlias('ApagarCompu', 'ApagarComputadora');
      this.crearBloqueAlias('SiguienteCompu', 'PasarASiguienteComputadora');
      this.crearBloqueAlias('Prenderfogata', 'PrenderFogata');
      this.crearBloqueAlias('Dejarregalo', 'DejarRegalo');
      this.crearBloqueAlias('Contarbanana', 'ContarBanana');
      this.crearBloqueAlias('Contarmanzana', 'ContarManzana');
      this.crearBloqueAlias('AvanzarKm', 'Avanzar1km');
      this.crearBloqueAlias('cambiarColor', 'CambiarColor');
      this.crearBloqueAlias('siguienteFoco', 'SiguienteFoco');
      this.crearBloqueAlias('empezarFiesta', 'EmpezarFiesta');
      this.crearBloqueAlias('Volveralbordeizquierdo', 'VolverAlBordeIzquierdo');
      this.crearBloqueAlias('Primersospechoso', 'IrAlPrimerSospechoso');
      this.crearBloqueAlias('PrimerSospechoso', "IrAlPrimerSospechoso");
      this.crearBloqueAlias('Siguientesospechoso', 'IrAlSiguienteSospechoso');
      this.crearBloqueAlias('SiguienteSospechoso', "IrAlSiguienteSospechoso");
      this.crearBloqueAlias('Sacardisfraz', 'InterrogarSospechoso');
      this.crearBloqueAlias('SacarDisfraz', 'InterrogarSospechoso');
      this.crearBloqueAlias('tocandoFogata', 'TocandoFogata');
      this.crearBloqueAlias('tocandoInicio', 'TocandoInicio');
      this.crearBloqueAlias('tocandoFinal', 'TocandoFinal');
      this.crearBloqueAlias('tocandoPelota', 'TocandoPelota');
      this.crearBloqueAlias('Estoyenunaesquina', 'EstoyEnEsquina');
      this.crearBloqueAlias('tocandoQueso', 'TocandoQueso');
      this.crearBloqueAlias('tocandoLuz', 'TocandoLuz');
      this.crearBloqueAlias('Abrirojos', 'AbrirOjos');
      this.crearBloqueAlias('Cerrarojos', 'CerrarOjos');
      this.crearBloqueAlias('Soar', "Soniar");
      this.crearBloqueAlias('Agarrarllave', "AgarrarLlave");
      this.crearBloqueAlias('Abrircofre', "AbrirCofre");
      this.crearBloqueAlias('Darsombrero', "DarSombrero");
      this.crearBloqueAlias('Atacarconespada', "AtacarConEspada");
      this.crearBloqueAlias('Escaparenunicornio', 'EscaparEnUnicornio');
      this.crearBloqueAlias('estoyInicio', 'EstoySobreElInicio');
      this.crearBloqueAlias('estoyAlInicio', 'EstoySobreElInicio');
      this.crearBloqueAlias('estoyFinColumna', 'EstoySobreElFinal');
      this.crearBloqueAlias('EstoyAlFin', 'EstoySobreElFinal');
      this.crearBloqueAlias('ComerBananaNano', 'ComerBanana');
      this.crearBloqueAlias('saltar1', 'SaltarHablando');
    }
  });

  _exports.default = _default;

  function shouldAddRequiredShadow(connection) {
    return connection.getShadowDom() == null // Should have not a shadow block
    && [Blockly.INPUT_VALUE, Blockly.NEXT_STATEMENT].includes(connection.type); // Should be a "block hole"
  } // Agrega un required shadow a todos los input que sean para encastrar otros bloques


  function requiredAllInputs(block) {
    block.inputList.filter(function (input) {
      return input.connection && shouldAddRequiredShadow(input.connection);
    }).forEach(function (input) {
      return requiredInput(block, input.name);
    });
  }

  function requiredInput(block, inputName) {
    var connection = block.getInput(inputName).connection;
    var shadowType = connection.type == Blockly.INPUT_VALUE ? "required_value" : "required_statement";
    var shadowValue = Blockly.Xml.textToDom("<shadow type=\"".concat(shadowType, "\"></shadow>"));
    connection.setShadowDom(shadowValue);
    if (!connection.targetConnection) connection.respawnShadow_();
  }
});
;define("pilasbloques/services/curso-api", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    guardar: function guardar(parametros) {
      return new Promise(function (success, reject) {
        var data = {
          hash: parametros.hash,
          desafio: parametros.actividad,
          usuario: parametros.idAlumno,
          xml: parametros.codigo_xml
        };
        $.ajax({
          url: "".concat(_environment.default.cursoBackendURL, "/soluciones/"),
          contentType: 'application/json',
          type: "post",
          data: JSON.stringify(data)
        }).done(success).fail(reject);
      });
    },
    obtener_solucion_xml_desde_hash: function obtener_solucion_xml_desde_hash(hash) {
      return new Promise(function (success, reject) {
        $.ajax({
          url: "".concat(_environment.default.cursoBackendURL, "/soluciones/").concat(hash),
          contentType: 'application/json',
          type: "get"
        }).done(function (result) {
          success(result.data[0].xml);
        }).fail(reject);
      });
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/services/highlighter", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /// Este service va recibiendo los Ids de los bloques que se ejecutan y SOLAMENTE se encarga del highlighting.
  /// Particularmente, tiene la lógica de highligh para los procedimientos.
  /// No sabe nada sobre qué hacen o cuándo se ejecutará cada bloque.
  var _default = Ember.Service.extend({
    blocks: [],
    step: function step(blockId) {
      var block = this._workspace().getBlockById(blockId);

      if (!block) {
        console.warn("Couldn't highlight block id: ".concat(blockId));
        return;
      }

      this._removeLastBlockIfEndOfModule();

      this._removePreviousBlockIfContinue(block);

      if (!this._ignore(block)) {
        this.blocks.push(block);
      }

      this._updateHighlight();
    },
    clear: function clear() {
      this.blocks.length = 0;

      this._clearHighlight();
    },
    _lastBlock: function _lastBlock() {
      return this.blocks[this.blocks.length - 1];
    },
    _removeLastBlockIfEndOfModule: function _removeLastBlockIfEndOfModule() {
      if (this._shouldRemoveLastBlock()) {
        this.blocks.pop();
      }
    },
    _removePreviousBlockIfContinue: function _removePreviousBlockIfContinue(block) {
      if (block.getParent() === this._lastBlock()) {
        this.blocks.pop();
      }
    },
    _ignore: function _ignore(block) {
      return this._isModuleDefinition(block);
    },
    _shouldRemoveLastBlock: function _shouldRemoveLastBlock() {
      return this._lastBlock() && this._isEndOfModule(this._lastBlock()) && !this._isProcedureCall(this._lastBlock());
    },
    _isEndOfModule: function _isEndOfModule(block) {
      return !block.getNextBlock();
    },
    _isModuleDefinition: function _isModuleDefinition(block) {
      return !block.getParent();
    },
    _isProcedureCall: function _isProcedureCall(block) {
      return !!block.defType_;
    },
    _updateHighlight: function _updateHighlight() {
      var _this = this;

      this._clearHighlight();

      this.blocks.forEach(function (b) {
        return _this._workspace().highlightBlock(b.id, true);
      });
    },
    _clearHighlight: function _clearHighlight() {
      this._workspace().highlightBlock();
    },
    _workspace: function _workspace() {
      return Blockly.getMainWorkspace();
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/services/interpreter-factory", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    pilas: Ember.inject.service(),

    /**
     * Retorna un intérprete preparado para ejecutar el código que
     * se le envíe como argumento.
     *
     * El código se ejecutará de manera aislada, en un entorno protegido
     * sin acceso al exterior (no tendrá acceso a ember, pilas, window, ni nada...)
     * así que las únicas funciones a las que podrá acceder están detalladas
     * en la función _initFunction, que aparece más abajo.
     */
    crearInterprete: function crearInterprete(codigo, callback_cuando_ejecuta_bloque) {
      var _this = this;

      return new Interpreter(this.wrappearCodigo(codigo), function (interpreter, scope) {
        return _this._initFunction(interpreter, scope, callback_cuando_ejecuta_bloque);
      });
    },

    /**
     * Inicializa el intérprete y su scope inicial, para que
     * pueda usar funcioens como "hacer", "console.log" etc..
     */
    _initFunction: function _initFunction(interpreter, scope, callback_cuando_ejecuta_bloque) {
      var pilasService = this.pilas;
      var actor = pilasService.evaluar("pilas.escena_actual().automata;");

      var console_log_wrapper = function console_log_wrapper(txt) {
        txt = txt ? txt.toString() : '';
        return interpreter.createPrimitive(console.log(txt));
      };

      interpreter.setProperty(scope, 'console_log', interpreter.createNativeFunction(console_log_wrapper)); // Esto deberia estar en otro lado, es un comportamiento que lo unico que
      // hace es llamar a una función.

      var ComportamientoLlamarCallback = function ComportamientoLlamarCallback(args) {
        this.argumentos = args;

        this.iniciar = function () {};

        this.actualizar = function () {
          this.argumentos.callback();
          return true;
        };

        this.eliminar = function () {};
      }; // Genera la función "out_hacer" que se llamará dentro del intérprete.
      //
      // Esta función encadenará dos comportamientos para simplificar el uso
      // de funciones asincrónicas. Agregará el comportamiento que represente
      // la acción que el usuario quiere hacer con el actor y luego agregará
      // otro comportamiento para indicar que la tarea asincrónica terminó.
      //
      // Por ejemplo, si en el código se llama a la función hacer así:
      //
      //      hacer("Saltar", {});
      //      hacer("Caminar", {pasos: 20});
      //
      // Internamente la función hará que el actor primero "salte" y luego
      // "camine" 20 pasos.


      var hacer_wrapper = function hacer_wrapper(comportamiento, params, callback) {
        comportamiento = comportamiento ? comportamiento.toString() : '';
        params = params ? params.toString() : '';
        params = JSON.parse(params);
        var clase_comportamiento = pilasService.evaluar("\n        var comportamiento = null;\n\n        if (window['".concat(comportamiento, "']) {\n          comportamiento = ").concat(comportamiento, ";\n        } else {\n          if (pilas.comportamientos['").concat(comportamiento, "']) {\n            comportamiento = pilas.comportamientos['").concat(comportamiento, "'];\n          } else {\n            throw new Error(\"No existe un comportamiento llamado '").concat(comportamiento, "'.\");\n          }\n        }\n\n        comportamiento;\n      "));

        if (typeof params.receptor === 'string') {
          params.receptor = pilasService.evaluar("pilas.escena_actual().".concat(params.receptor));
        }

        actor.hacer_luego(clase_comportamiento, params);
        actor.hacer_luego(ComportamientoLlamarCallback, {
          callback: callback
        });
      };

      interpreter.setProperty(scope, 'out_hacer', interpreter.createAsyncFunction(hacer_wrapper));
      /**
       * Es el código que se ejecuta con una expresión (sensor, operación, etc.)
       */

      function out_evaluar(expr) {
        expr = expr ? expr.toString() : '';
        return interpreter.createPrimitive(pilasService.evaluar("\n        try {\n          var value = pilas.escena_actual().automata.".concat(expr, "\n        } catch (e) {\n          pilas.escena_actual().errorHandler.handle(e);\n        }\n\n        value")));
      }

      interpreter.setProperty(scope, 'evaluar', interpreter.createNativeFunction(out_evaluar));
      /**
       * Llama a callback_cuando_ejecuta_bloque con el id del bloque en ejecucion.
       */

      function out_highlightBlock(id) {
        id = id ? id.toString() : '';
        return interpreter.createPrimitive(callback_cuando_ejecuta_bloque.call(this, id));
      }

      interpreter.setProperty(scope, 'highlightBlock', interpreter.createNativeFunction(out_highlightBlock));
    },
    wrappearCodigo: function wrappearCodigo(codigo) {
      return js_beautify("\n        var actor_id = 'demo'; // se asume el actor receptor de la escena.\n\n        function hacer(id, comportamiento, params) {\n          out_hacer(comportamiento, JSON.stringify(params));\n        }\n\n        function main() {\n          ".concat(codigo, "\n        }\n\n        main();\n      "));
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/services/media", ["exports", "ember-responsive/services/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _media.default;
  _exports.default = _default;
});
;define("pilasbloques/services/modal-dialog", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function computedFromConfig(prop) {
    return Ember.computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  var _default = Ember.Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: null // injected by initializer

  });

  _exports.default = _default;
});
;define("pilasbloques/services/notificador", ["exports", "pilasbloques/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    ajax: Ember.inject.service(),
    hayActualizacion: false,
    versionActual: null,
    esVersionAnterior: function esVersionAnterior(stringV1, stringV2) {
      function parseVersionString(str) {
        if (typeof str !== 'string') {
          return false;
        }

        var x = str.split('+')[0].split('.'); // parse from string or default to 0 if can't parse

        var maj = parseInt(x[0]) || 0;
        var min = parseInt(x[1]) || 0;
        var pat = parseInt(x[2]) || 0;
        return {
          major: maj,
          minor: min,
          patch: pat
        };
      }

      var v1 = parseVersionString(stringV1);
      var v2 = parseVersionString(stringV2);
      return v1.major < v2.major || v1.major === v2.major && v1.minor < v2.minor || v1.major === v2.major && v1.minor === v2.minor && v1.patch < v2.patch;
    },

    /**
     * Consulta contra la API de github si existe una versión nueva de la
     * aplicación para actualizar.
     */
    consultar: function consultar() {
      var _this = this;

      var versionActual = _environment.default.APP.version;
      var url = _environment.default['versionURL'];
      return this.ajax.request(url).then(function (data) {
        var versionDesdeElServidor = data.tag_name;

        if (_this.esVersionAnterior(versionActual, versionDesdeElServidor)) {
          _this.set('hayActualizacion', true);

          _this.set('versionActual', data.tag_name);

          return {
            hayActualizacion: true,
            version: data.tag_name
          };
        } else {
          return {
            hayActualizacion: false,
            version: data.tag_name
          };
        }
      });
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/services/pilas", ["exports", "pilasbloques/components/listaImagenes"], function (_exports, _listaImagenes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * Provee acceso a pilasweb y sus eventos.
   *
   * @public
   * @module PilasService
   */

  /**
   * Un servicio que provee métodos y eventos para comunicarse
   * con pilasweb y el componente pilas-canvas.
   * DEMO.
   *
   * Estos son los eventos que puede reportar el servicio:
   *
   * - terminaCargaInicial
   * - errorDeActividad
   *
   * @public
   * @class PilasService
   */
  var _default = Ember.Service.extend(Ember.Evented, {
    iframe: null,
    actorCounter: 0,
    pilas: null,
    loading: true,
    inicializadorDeLaEscenaActual: null,
    temporallyCallback: null,

    /* almacena el callback para avisar si pilas
       se reinició correctamente. */

    /**
     * Instancia pilas-engine con los atributos que le envíe
     * el componente x-canvas.
     *
     * Este método realiza una conexión con el servicio pilas, y
     * se llamará automáticamente ante dos eventos: se agrega el
     * componente x-canvas a un template o se ha llamado a `reload`
     * en el servicio pilas.
     *
     * @public
     */
    inicializarPilas: function inicializarPilas(iframeElement, options, nombreOInicializadorDeEscena) {
      var _this = this;

      this.set("iframe", iframeElement);
      this.set("loading", true);
      return new Promise(function (success) {
        var width = options.width;
        var height = options.height; // Cuidado: esto hace que no se pueda cargar una escena diferente en esta instancia de pilas.
        // La razón es que se le pregunta a la escena qué imágenes precargar.

        var listaImagenesSerializada = _this.imagenesParaPrecargar(nombreOInicializadorDeEscena).join("|");

        var code = "\n        var canvasElement = document.getElementById('canvas');\n        var listaImagenes = \"".concat(listaImagenesSerializada, "\".split(\"|\");\n        var opciones = {ancho: ").concat(width, ",\n                        alto: ").concat(height, ",\n                        canvas: canvasElement,\n                        data_path: 'libs/data',\n                        imagenesExtra: listaImagenes,\n                        cargar_imagenes_estandar: false,\n                        silenciar_advertencia_de_multiples_ejecutar: true\n                      };\n\n        var pilas = pilasengine.iniciar(opciones);\n\n        pilas;\n      ");
        var pilas = iframeElement.contentWindow.eval(code);

        _this.conectarEventos();

        pilas.onready = function () {
          //this.get('actividad').iniciarEscena();
          //var contenedor = document.getElementById('contenedor-blockly');
          //this.get('actividad').iniciarBlockly(contenedor);
          //if (this.get('actividad')['finalizaCargarBlockly']) {
          //  this.get('actividad').finalizaCargarBlockly();
          //}
          success(pilas);
          /*
           * Si el usuario llamó a "reload" desde este servicio, tendría
           * que existir una promesa en curso, así que estas lineas se
           * encargan de satisfacer esa promesa llamando al callback success.
           */

          if (_this.temporallyCallback) {
            _this.temporallyCallback(pilas);

            _this.set("temporallyCallback", null);
          }

          _this.set("loading", false);
        };

        pilas.ejecutar();

        _this.cambiarFPS(100);
      });
    },
    imagenesParaPrecargar: function imagenesParaPrecargar(nombreOInicializadorDeEscena) {
      //Le pregunto a la escena qué imágenes va a necesitar
      var imagenes = this.evaluar("".concat(this.nombreDeEscena(nombreOInicializadorDeEscena), ".imagenesPreCarga()")); //Si la escena no las sabe, cargo todas:

      return imagenes.length ? imagenes : _listaImagenes.default;
    },
    nombreDeEscena: function nombreDeEscena(nombreOInicializadorDeEscena) {
      if (nombreOInicializadorDeEscena.indexOf('new') === -1) {
        // Significa que vino el nombre.
        return nombreOInicializadorDeEscena;
      } else {
        // Significa que hay una construcción en el string.
        // La expresión regular captura el nombre de la clase (\w+)
        // y el [1] accede al primer grupo de captura.
        return nombreOInicializadorDeEscena.match(/new\s+(\w+)\s*\(/)[1];
      }
    },

    /**
     * Libera los eventos y recursos instanciados por este servicio.
     *
     * @method liberarRecursos
     * @public
     */
    liberarRecursos: function liberarRecursos() {
      this.desconectarEventos();
    },

    /**
     * Captura cualquier mensaje desde el iframe y lo propaga
     * como un evento de ember evented.
     *
     * Los eventos que se originan en el iframe tienen la forma:
     *
     *     {
     *       tipo: "tipoDeMensaje"    # Cualquiera de los listados más arriba.
     *       detalle: [...]           # string con detalles para ese evento.
     *     }
     *
     * Sin embargo esta función separa esa estructura para que sea más
     * sencillo capturarla dentro de ember.
     *
     * Por ejemplo, si queremos capturar un error (como hace la batería de tests),
     * podemos escribir:
     *
     *     pilas.on('errorDeActividad', function(motivoDelError) {
     *       // etc...
     *     });
     *
     * @method contectarEventos
     * @private
     *
     */
    conectarEventos: function conectarEventos() {
      var _this2 = this;

      $(window).on("message.fromIframe", function (e) {
        var datos = e.originalEvent.data;

        _this2.trigger(datos.tipo, datos.detalle);
      });
    },

    /**
     * Se llama automáticamente para desconectar los eventos del servicio.
     *
     * @method desconectarEventos
     * @private
     */
    desconectarEventos: function desconectarEventos() {
      $(window).off("message.fromIframe");
    },
    inicializarEscena: function inicializarEscena(iframeElement, nombreOInicializador) {
      var inicializador = nombreOInicializador;

      if (inicializador.indexOf('new') === -1) {
        //Significa que vino un nombre de escena.
        inicializador = "new ".concat(inicializador, "()");
      }

      var codigo = "\n      var escena = ".concat(inicializador, ";\n      pilas.mundo.gestor_escenas.cambiar_escena(escena);\n    ");
      this.evaluar(codigo);
      this.set("inicializadorDeLaEscenaActual", inicializador);
    },

    /**
     * Evalúa código reiniciando completamente la biblioteca.
     *
     * @method ejecutarCodigo
     * @public
     */
    ejecutarCodigo: function ejecutarCodigo(codigo) {
      var _this3 = this;

      this.reiniciar().then(function () {
        var iframeElement = _this3.iframe;
        iframeElement.contentWindow.eval(codigo);
      });
    },

    /**
     * Retorna true si el problema está resuelto.
     *
     * @method estaResueltoElProblema
     * @public
     */
    estaResueltoElProblema: function estaResueltoElProblema() {
      return this.evaluar("pilas.escena_actual().estaResueltoElProblema();");
    },

    /**
     * Ejecuta el código reiniciando la escena rápidamente.
     *
     * @method ejecutarCodigoSinReiniciar
     * @public
     *
     * @todo convertir en método privado.
     */
    ejecutarCodigoSinReiniciar: function ejecutarCodigoSinReiniciar(codigo) {
      if (this.loading) {
        console.warn("Cuidado, no se puede ejecutar antes de que pilas cargue.");
        return;
      }

      var iframeElement = this.iframe;
      this.reiniciarEscenaCompleta();
      iframeElement.contentWindow.eval(codigo);
    },

    /**
     * Retorna una captura de pantalla de la escena en formato png/base64
     *
     * @method obtenerCapturaDePantalla
     * @public
     */
    obtenerCapturaDePantalla: function obtenerCapturaDePantalla() {
      var iframeElement = this.iframe;
      return iframeElement.contentWindow.document.getElementById('canvas').toDataURL('image/png');
    },

    /**
     * Realiza un reinicio rápido de la escena actual.
     *
     * @method reiniciarEscenaCompleta
     * @private
     */
    reiniciarEscenaCompleta: function reiniciarEscenaCompleta() {
      var iframeElement = this.iframe;
      iframeElement.contentWindow.eval("pilas.reiniciar();");
      this.inicializarEscena(iframeElement, this.inicializadorDeLaEscenaActual);
    },

    /**
     * Modifica la velocidad de las animaciones y la simulación.
     *
     * Este método es particularmente útil para ejecutar los tests de integración
     * super rápido.
     *
     * Por omisión pilas utiliza un temporizador a 60 FPS.
     *
     * @method cambiarFPS
     * @public
     *
     */
    cambiarFPS: function cambiarFPS(fps) {
      this.evaluar("pilas.setFPS(".concat(fps, ");"));
    },

    /**
     * Permite reiniciar pilas por completo.
     *
     * La acción de reinicio se realiza re-cargando el iframe
     * que contiene a pilas, así que se va a volver a llamar al
     * método `instanciarPilas` automáticamente.
     *
     * Este método retorna una promesa, que se cumple cuando pilas se
     * halla cargado completamente.
     *
     * @method reiniciar
     * @private
     */
    reiniciar: function reiniciar() {
      var _this4 = this;

      return new Promise(function (success) {
        if (_this4.loading) {
          console.warn("Cuidado, se está reiniciando en medio de la carga.");
        }

        _this4.set("loading", true);

        _this4.iframe.contentWindow.location.reload(true);
        /* Guarda el callback  para que se llame luego de la carga de pilas. */


        _this4.set("temporallyCallback", success);
      });
    },

    /**
     * Retorna la cantidad de actores en la escena con la etiqueta solicitada.
     *
     * @method contarActoresConEtiqueta
     * @public
     */
    contarActoresConEtiqueta: function contarActoresConEtiqueta(etiqueta) {
      var codigo = "\n      var actoresEnLaEscena = pilas.escena_actual().actores;\n\n      var actoresConLaEtiqueta = actoresEnLaEscena.filter(function(actor) {\n        return actor.tiene_etiqueta(\"".concat(etiqueta, "\");\n      });\n\n      actoresConLaEtiqueta.length;\n    ");
      return this.evaluar(codigo);
    },
    cambiarAModoDeLecturaSimple: function cambiarAModoDeLecturaSimple() {
      this.evaluar('pilas.cambiarAModoDeLecturaSimple()');
    },
    cambiarAModoDeLecturaNormal: function cambiarAModoDeLecturaNormal() {
      this.evaluar('pilas.cambiarAModoDeLecturaNormal()');
    },

    /**
     * Evalúa código directamente, sin reiniciar de ninguna forma.
     *
     * @method evaluar
     * @public
     */
    evaluar: function evaluar(codigo) {
      var iframeElement = this.iframe;
      return iframeElement.contentWindow.eval(codigo);
    },
    habilitarModoTurbo: function habilitarModoTurbo() {
      this.evaluar('ComportamientoConVelocidad').modoTurbo = true;
      this.evaluar('pilas').ponerVelocidadMaxima();
    },
    deshabilitarModoTurbo: function deshabilitarModoTurbo() {
      this.evaluar('ComportamientoConVelocidad').modoTurbo = false;
      this.evaluar('pilas').ponerVelocidadNormal();
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/services/twitter", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  //const URL = "http://localhost:3000/sendMessage";
  var URL_SEND_MESSAGE = "http://104.131.245.133:9914/sendMessage";

  var _default = Ember.Service.extend({
    compartir: function compartir(mensaje, imagen) {
      return new Promise(function (resolve, reject) {
        $.ajax({
          url: URL_SEND_MESSAGE,
          type: 'POST',
          dataType: 'json',
          contentType: "application/json",
          data: JSON.stringify({
            message: mensaje,
            media: imagen
          }),
          success: function success(res) {
            resolve(res);
          },
          error: function error(xhr) {
            console.error(xhr.responseText);
            reject(xhr.responseText);
          }
        });
      });
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/services/zoom", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    zoom: 100,
    getValue: function getValue() {
      return this.zoom;
    },
    setValue: function setValue(zoomValue) {
      this.set('zoom', zoomValue);
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/acercade", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zv9YWZfh",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"contenido-principal\"],[8],[0,\"\\n\\t\"],[7,\"div\",true],[10,\"class\",\"contenedor-acercade\"],[8],[0,\"\\n\\t\\t\"],[1,[22,\"pilas-acerca-de\"],false],[0,\"\\n\\n\\t\\t\"],[7,\"p\",true],[8],[0,\"Ви використовуєте версію \"],[7,\"code\",true],[8],[1,[22,\"app-version\"],false],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"hayActualizacion\"]]],null,{\"statements\":[[0,\"\\t\\t\\t \\t(y se puede actualizar a la versión \"],[1,[22,\"versionMasReciente\"],false],[0,\")\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t\"],[7,\"p\",true],[8],[0,\"\\n\\t\\t  \"],[7,\"button\",false],[12,\"class\",\"btn btn-warning\"],[3,\"action\",[[23,0,[]],\"visitarWeb\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-globe\"],[10,\"aria-hidden\",\"true\"],[8],[9],[0,\" Відвідайте веб-сайт проєкту\"],[9],[0,\"\\n\\t\\t  \"],[1,[22,\"pilas-update\"],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/acercade.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/application-loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "PsKmnNgs",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\"],[1,[22,\"pilas-cargando\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/application-loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "w/aQzLDS",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[24,[\"layout\"]]],null,{\"statements\":[[0,\"  \"],[1,[22,\"pilas-header\"],false],[0,\"\\n  \"],[1,[28,\"pilas-notificador\",null,[[\"servicioNotificador\"],[[24,[\"notificador\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"div\",true],[11,\"class\",[28,\"if\",[[24,[\"layout\"]],\"contenedor-padding-superior\",\"contenedor-sin-padding\"],null]],[8],[0,\"\\n\"],[1,[22,\"outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/info-reportar-problema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "P7rcBc7K",
    "block": "{\"symbols\":[],\"statements\":[[7,\"p\",true],[8],[0,\"¿Tenés algún problema?\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"¿Pensás que este ejercicio tiene un error?\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Podés escribirnos a \"],[7,\"a\",true],[10,\"href\",\"mailto:pilasbloques@program.ar\"],[8],[0,\"pilasbloques@program.ar\"],[9],[0,\" \"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Si tenés una cuenta en Github podés también hacernos un reporte de error directamente en el \"],[4,\"pilas-link\",null,[[\"href\"],[\"https://github.com/Program-AR/pilas-bloques/issues\"]],{\"statements\":[[0,\"Issue Tracker\"]],\"parameters\":[]},null],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/info-reportar-problema.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/modal-ayuda", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "oCBP/BeD",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[24,[\"mostrar\"]]],null,{\"statements\":[[4,\"modal-dialog\",null,[[\"onClose\",\"targetAttachment\",\"translucentOverlay\"],[[28,\"action\",[[23,0,[]],\"close\"],null],\"center\",true]],{\"statements\":[[0,\"\\n  \"],[1,[28,\"modal-title\",null,[[\"title\",\"close\"],[\"Ayuda\",[28,\"action\",[[23,0,[]],\"close\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"modal-body\"],[8],[0,\"\\n    \"],[14,1],[0,\"\\n\\n    \"],[7,\"p\",true],[8],[0,\"Esta aplicación te presentará varios desafíos que se pueden\\n      resolver conectando bloques.\"],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[8],[0,\"El primer paso es abrir la sección de Desafíos:\"],[9],[0,\"\\n\\n    \"],[7,\"img\",true],[10,\"src\",\"imagenes/ayuda/seleccionar.gif\"],[10,\"class\",\"img-border\"],[8],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[8],[0,\"Los bloques están agrupados en categorías, usá la barra lateral\\n      para desplegar los bloques.\"],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[8],[0,\"Luego podés arrastrar y soltar los bloques sobre el área\\n      de trabajo.\"],[9],[0,\"\\n\\n    \"],[7,\"img\",true],[10,\"src\",\"imagenes/ayuda/arrastrar.gif\"],[10,\"class\",\"img-border\"],[8],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[8],[0,\"Una vez que tengas tu programa listo pulsá el botón ejecutar\\n      continuar.\"],[9],[0,\"\\n\\n    \"],[7,\"img\",true],[10,\"src\",\"imagenes/ayuda/ejecutar.gif\"],[10,\"class\",\"img-border\"],[8],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[8],[0,\"Ah, y los bloques se pueden borrar arrastrándolos a la papelera.\"],[9],[0,\"\\n\\n    \"],[7,\"img\",true],[10,\"src\",\"imagenes/ayuda/borrar.gif\"],[10,\"class\",\"img-border\"],[8],[9],[0,\"\\n\\n    \"],[7,\"h3\",true],[8],[0,\"Reportar un problema\"],[9],[0,\"\\n    \"],[1,[22,\"info-reportar-problema\"],false],[0,\"\\n  \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/modal-ayuda.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/modal-title", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WQ+UAG7U",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"h4\",true],[10,\"class\",\"modal-title\"],[8],[1,[22,\"title\"],false],[0,\" \"],[7,\"button\",false],[12,\"id\",\"cerrar-modal\"],[12,\"class\",\"pull-right btn btn-xs btn-default\"],[3,\"action\",[[23,0,[]],\"ocultar\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-close fa-2x\"],[10,\"aria-hidden\",\"true\"],[8],[9],[9],[9],[0,\"\\n\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/modal-title.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-acerca-de", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "KKZ5eGF+",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"Про Розумні блоки(Pilas Bloques)\"],[9],[0,\"\\n\\n\"],[7,\"p\",true],[8],[0,\"\\n  Pilas Bloques - це програма для опанування програмування, спеціально розроблена для навчання. \\n\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"\\n  Вправи з різним рівнем складності пропонуються учням, щоб наблизити їх до світу програмування через використання блоків.\\n\"],[9],[0,\"\\n\\n\"],[7,\"h2\",true],[8],[0,\"\\n  Що таке програмування через блоки?\\n\"],[9],[0,\"\\n\\n\"],[7,\"p\",true],[8],[0,\"\\n  Потрібно розробити програми з діями та інструкціями, вбудованими в заздалегідь розроблені блоки або фрагменти. Результатом поєднання блоків між собою є програма, яка вирішує поставлену задачу або завдання.\\n\"],[9],[0,\"\\n\\n\"],[7,\"h2\",true],[8],[0,\"\\n  Чому цей режим навчання доцільний?\\n\"],[9],[0,\"\\n\\n\"],[7,\"ul\",true],[8],[0,\"\\n  \"],[7,\"li\",true],[8],[0,\"\\n     Тому, що кожна \"],[7,\"b\",true],[8],[0,\"концепція\"],[9],[0,\" асоційована з програмуванням, має своє представлення, подане \"],[7,\"b\",true],[8],[0,\"візуально\"],[9],[0,\".\\n  \"],[9],[0,\"\\n  \"],[7,\"li\",true],[8],[0,\"\\n    Тому що ви уникаєте \"],[7,\"b\",true],[8],[0,\"труднощів\"],[9],[0,\", що їх викликає формальний синтаксис мови, \"],[7,\"b\",true],[8],[0,\"помилок\"],[9],[0,\" (і розчарувань, коли ми робимо помилку при написанні!). Блоки вибираються, перетягуються, вбудовуються у програму, і - готово...\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h2\",true],[8],[0,\"\\n  Чим Pilas Bloques відрізняється від інших інструментів?\\n\"],[9],[0,\"\\n\\n\"],[7,\"p\",true],[8],[0,\"\\n  Основна відмінність полягає в тому, що ця платформа була розроблена, щоб \"],[7,\"b\",true],[8],[0,\"реалізувати дидактичну послідовність\"],[9],[0,\" вивчення програмування в школі.\\n\"],[9],[0,\"\\n\\n\"],[7,\"h2\",true],[8],[0,\"\\n  Що таке дидактична послідовність?\\n\"],[9],[0,\"\\n\\n\"],[7,\"p\",true],[8],[0,\"\\n  Це план, за яким пропонується вивчити предмет. Дидактична послідовність Pilas Bloques була розроблена та перевірена аргентинськими вчителями та дослідниками. Сьогодні ця робота поглиблюється та розширюється. Дізнайтеся більше про ініціативи, до яких ми звертаємось у \"],[4,\"pilas-link\",null,[[\"href\"],[\"http://program.ar/comunidad-conocimiento/\"]],{\"statements\":[[0,\"Спільноті знань\"]],\"parameters\":[]},null],[0,\".\\n\"],[9],[0,\"\\n\\n\"],[7,\"h2\",true],[8],[0,\"\\n  Хто може виконувати вправи Pilas Bloques?\\n\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"\\n  Вправи можуть виконувати діти від 3 до 99 років;). Однак зараз ми \\n супроводжуємо два посібники для вчителів, орієнтованих на \"],[7,\"b\",true],[8],[0,\" молодшу школу \"],[9],[0,\", дітям від\\n  6 до 8 років краще скористатися вправами першого рівня, а дітям віком від 9 до 12 років\\n  - виконувати вправи другого рівня.\\n\"],[9],[0,\"\\n\\n\"],[7,\"h2\",true],[8],[0,\"\\n  Чи може хтось виконувати вправи самостійно?\\n\"],[9],[0,\"\\n\\n\"],[7,\"p\",true],[8],[0,\"\\n  Інструмент призначений як \"],[7,\"b\",true],[8],[0,\"для підтримки викладачів та учнів\"],[9],[0,\" у процесі вивчення \\n  програмування в школі. У дидактичній послідовності, яка пропонується нами, \\n\"],[7,\"b\",true],[8],[0,\"необхідність\"],[9],[0,\" самостійної роботи є важливою. Ми рекомендуємо \\n  вчителям \"],[7,\"b\",true],[8],[0,\"спрямовувати\"],[9],[0,\" та сприяти процесу навчання учнів.\\n\"],[9],[0,\"\\n\\n\"],[7,\"h2\",true],[8],[0,\"\\n  Контакти\\n\"],[9],[0,\"\\n\\n\"],[7,\"p\",true],[8],[0,\"\\n З будь-яких питань ви можете звернутися до нас за адресою: \"],[7,\"a\",true],[10,\"href\",\"mailto:pilasbloques@program.ar\"],[8],[0,\"pilasbloques@program.ar\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h2\",true],[8],[0,\"\\n  Про авторів та Program.AR\\n\"],[9],[0,\"\\n\\n\"],[7,\"p\",true],[8],[0,\"\\n  Pilas Bloques було розроблено для \"],[4,\"pilas-link\",null,[[\"href\"],[\"http://program.ar/\"]],{\"statements\":[[0,\"Program.AR\"]],\"parameters\":[]},null],[0,\" - \"],[4,\"pilas-link\",null,[[\"href\"],[\"http://www.fundacionsadosky.org.ar/\"]],{\"statements\":[[0,\"Fundación Sadosky\"]],\"parameters\":[]},null],[0,\" разом з \"],[4,\"pilas-link\",null,[[\"href\"],[\"http://huayra.conectarigualdad.gob.ar/\"]],{\"statements\":[[0,\"Huayra\"]],\"parameters\":[]},null],[0,\". Ця програма використовує як інструмент \"],[4,\"pilas-link\",null,[[\"href\"],[\"http://pilas-engine.com.ar/\"]],{\"statements\":[[0,\"Pilas Engine Web\"]],\"parameters\":[]},null],[0,\" створений \"],[4,\"pilas-link\",null,[[\"href\"],[\"https://github.com/hugoruscitti\"]],{\"statements\":[[0,\"Уго Русчітті\"]],\"parameters\":[]},null],[0,\".\\n\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"\\n  Дидактичні принципи, якими керується інструмент, було розроблено \"],[4,\"pilas-link\",null,[[\"href\"],[\"http://program.ar/\"]],{\"statements\":[[0,\"Program.AR\"]],\"parameters\":[]},null],[0,\", і їх можна знайти разом з іншими матеріалами на веб-сайті, який створено завдяки підтримці та співпраці Національного університету Кільмеса і інших національних університетів Аргентини.\\n\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"\\n  Program.AR - ініціатива, метою якої є вивчення інформатики та програмування  в усіх школах Аргентини. Більше інформації: \"],[4,\"pilas-link\",null,[[\"href\"],[\"http://program.ar/por-que-ciencias-de-la-computacion/\"]],{\"statements\":[[0,\"http://program.ar/por-que-ciencias-de-la-computacion/\"]],\"parameters\":[]},null],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-acerca-de.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-blockly", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "qLYlaTXr",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"vbox\"],[8],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"pilas-blockly-botones\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"cargando\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\",true],[10,\"class\",\"center\"],[8],[0,\" завантаження ... \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n\"],[4,\"if\",[[24,[\"pasoAPasoHabilitado\"]]],null,{\"statements\":[[4,\"if\",[[24,[\"ejecutando\"]]],null,{\"statements\":[[4,\"if\",[[24,[\"pausadoEnBreakpoint\"]]],null,{\"statements\":[[0,\"            \"],[7,\"button\",false],[12,\"class\",\"btn btn-default btn-info\"],[3,\"action\",[[23,0,[]],\"step\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-step-forward\"],[8],[9],[0,\" Наступний крок\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"button\",true],[10,\"class\",\"btn btn-default btn-info\"],[10,\"disabled\",\"\"],[8],[7,\"i\",true],[10,\"class\",\"fa fa-step-forward\"],[8],[9],[0,\" Наступний крок\"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"button\",false],[12,\"class\",\"btn btn-success btn-info\"],[3,\"action\",[[23,0,[]],\"ejecutar\",true]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-play\"],[8],[9],[0,\" Виконати покроково\"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"debeMostarReiniciar\"]]],null,{\"statements\":[[0,\"          \"],[7,\"button\",false],[12,\"class\",\"btn btn-warning\"],[3,\"action\",[[23,0,[]],\"reiniciar\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-refresh\"],[8],[9],[0,\" Перезапустити\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"button\",false],[12,\"class\",\"btn btn-success btn-ejecutar\"],[3,\"action\",[[23,0,[]],\"ejecutar\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-play\"],[8],[9],[0,\" Виконати\"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"unless\",[[24,[\"estoyEnMoodle\"]]],null,{\"statements\":[[0,\"\\n        \"],[1,[28,\"pilas-solution-file\",null,[[\"actividad\",\"workspace\",\"xml\"],[[24,[\"modelActividad\"]],[24,[\"initial_workspace\"]],[24,[\"codigoActualEnFormatoXML\"]]]]],false],[0,\"\\n        \\n        \"],[5,\"pilas-toggle\",[],[[\"@isDisabled\",\"@isChecked\",\"@icon\",\"@tooltip\",\"@element-id\"],[[23,0,[\"ejecutando\"]],[23,0,[\"modoTuboHabilitado\"]],\"fa fa-bolt\",\"Режим Турбо\",\"modo-turbo\"]]],[0,\" \\n\\n\"],[4,\"if\",[[24,[\"debeMostarRegresarAlLibro\"]]],null,{\"statements\":[[0,\"          \"],[4,\"link-to\",null,[[\"class\",\"route\",\"model\"],[\"btn btn-default border-right right\",\"libros.verLibro\",[24,[\"model\",\"grupo\",\"libro\"]]]],{\"statements\":[[7,\"i\",true],[10,\"class\",\"fa fa-arrow-left\"],[8],[9],[0,\" До бібліотеки\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[24,[\"mostrarCompartir\"]]],null,{\"statements\":[[0,\"          \"],[7,\"button\",false],[12,\"class\",\"btn btn-info border-right right\"],[3,\"action\",[[23,0,[]],\"compartir\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-twitter\"],[8],[9],[0,\" Compartir\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n  \"],[9],[0,\"\\n\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"contenedor-para-componente-blocky\"],[8],[0,\"\\n\"],[4,\"if\",[[24,[\"cargando\"]]],null,{\"statements\":[[0,\"      \"],[1,[22,\"pilas-cargando\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n      \"],[1,[28,\"ember-blockly\",null,[[\"mediaFolder\",\"blocks\",\"workspace\",\"withZoom\",\"withTrash\",\"comments\",\"disable\",\"duplicate\",\"help\",\"disableBlock\",\"javascriptCode\",\"showCode\",\"comment\",\"onChangeWorkspace\",\"onNewWorkspace\",\"disableNotConnectedToMainBlock\"],[\"blockly-package/media/\",[24,[\"blockly_toolbox\"]],[24,[\"initial_workspace\"]],true,true,[24,[\"blockly_comments\"]],[24,[\"blockly_disable\"]],[24,[\"blockly_duplicate\"]],false,false,[24,[\"javascriptCode\"]],[24,[\"showCode\"]],false,[28,\"action\",[[23,0,[]],\"onChangeWorkspace\"],null],[28,\"action\",[[23,0,[]],\"onNewWorkspace\"],null],true]]],false],[0,\"\\n\\n\"]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",false],[12,\"id\",\"preguntaPorProblemas\"],[3,\"action\",[[23,0,[]],\"abrirReporteProblemas\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-question-circle\"],[10,\"aria-hidden\",\"true\"],[8],[9],[0,\" Якась проблема з цією вправою? \"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\\n\\n\"],[4,\"if\",[[24,[\"mostrarDialogoFinDesafio\"]]],null,{\"statements\":[[4,\"modal-dialog\",null,[[\"onClose\",\"attatchment\",\"translucentOverlay\",\"containerClass\"],[[28,\"action\",[[23,0,[]],\"ocultarFinDesafio\"],null],\"middle center\",true,\"dialogoFinDesafio\"]],{\"statements\":[[0,\"\\n    \"],[1,[28,\"modal-title\",null,[[\"title\",\"close\"],[\"Ви це зробили!\",[28,\"action\",[[23,0,[]],\"ocultarFinDesafio\"],null]]]],false],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"center\"],[8],[0,\"\\n      \"],[7,\"img\",true],[10,\"src\",\"imagenes/libros/primer-ciclo.png\"],[8],[9],[0,\"\\n      \"],[7,\"img\",true],[10,\"style\",\"transform:scaleX(-1)\"],[10,\"src\",\"imagenes/libros/programar.png\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[7,\"strong\",true],[8],[0,\"Варто пам\'ятати: \"],[9],[0,\" Ваша програма - не єдина, яка вирішує проблему. Є й інші рішення!\"],[9],[0,\"\\n\"],[0,\"    \"],[7,\"p\",true],[8],[0,\"Ви добре опанували ці поняття!\"],[9],[0,\"  \\n\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[24,[\"mostrarDialogoReporteProblemas\"]]],null,{\"statements\":[[4,\"modal-dialog\",null,[[\"onClose\",\"targetAttachment\",\"translucentOverlay\",\"containerClass\"],[[28,\"action\",[[23,0,[]],\"cerrarReporteProblemas\"],null],\"center\",true,\"dialogoAjustado\"]],{\"statements\":[[0,\"    \"],[1,[28,\"modal-title\",null,[[\"title\",\"close\"],[\"Reportar un problema\",[28,\"action\",[[23,0,[]],\"cerrarReporteProblemas\"],null]]]],false],[0,\"\\n    \"],[1,[22,\"info-reportar-problema\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-blockly.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-botones-zoom", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "XOPozfto",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[24,[\"canZoomOut\"]]],null,{\"statements\":[[0,\"  \"],[7,\"button\",false],[12,\"class\",\"btn btn-success btn-rect\"],[3,\"action\",[[23,0,[]],\"zoomOut\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-minus\"],[8],[9],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"button\",true],[10,\"disabled\",\"\"],[10,\"class\",\"btn btn-success btn-rect\"],[8],[7,\"i\",true],[10,\"class\",\"fa fa-minus\"],[8],[9],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n  \"],[7,\"span\",false],[12,\"class\",\"zoom-label\"],[3,\"action\",[[23,0,[]],\"zoomRestore\"]],[8],[1,[22,\"zoomValue\"],false],[0,\"%\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"canZoomIn\"]]],null,{\"statements\":[[0,\"  \"],[7,\"button\",false],[12,\"class\",\"btn btn-success btn-rect\"],[3,\"action\",[[23,0,[]],\"zoomIn\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-plus\"],[8],[9],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"button\",true],[10,\"disabled\",\"\"],[10,\"class\",\"btn btn-success btn-rect\"],[8],[7,\"i\",true],[10,\"class\",\"fa fa-plus\"],[8],[9],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-botones-zoom.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-canvas", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iAprn5Sg",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\\n\"],[1,[28,\"pilas-spinner\",null,[[\"centered\"],[true]]],false],[0,\"\\n\\n\"],[7,\"iframe\",true],[10,\"src\",\"pilas.html\"],[10,\"width\",\"100%\"],[10,\"height\",\"100%\"],[10,\"class\",\"iframe-pilas-canvas\"],[10,\"id\",\"innerIframe\"],[8],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-canvas.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-cargando", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "t6sc8X05",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"pilas-spinner\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-cargando.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-desafio", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ARZ4waWa",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[24,[\"model\",\"deshabilitado\"]]],null,{\"statements\":[[0,\"  \"],[7,\"img\",true],[10,\"class\",\"grayscale semi-transparente\"],[11,\"src\",[29,[\"images/desafios/\",[24,[\"model\",\"nombreImagen\"]]]]],[8],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"ribbon right gray semi-transparente\"],[8],[7,\"a\",true],[8],[0,\"Muy pronto\"],[9],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"link-to\",null,[[\"query\",\"route\",\"model\"],[[28,\"hash\",null,[[\"codigo\"],[\"\"]]],\"desafio\",[24,[\"model\"]]]],{\"statements\":[[0,\"    \"],[7,\"img\",true],[10,\"class\",\"desafio-img\"],[11,\"src\",[29,[\"images/desafios/\",[24,[\"model\",\"nombreImagen\"]]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n\"],[4,\"unless\",[[24,[\"model\",\"grupo\",\"libro\",\"desafiosCortos\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\",true],[10,\"class\",\"pilas-desafio-titulo\"],[8],[1,[24,[\"model\",\"titulo\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-desafio.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-editor", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9HtGlKlX",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[\"contenido-principal desafio-contenedor \",[28,\"if\",[[24,[\"modoLecturaSimple\"]],\"aplicar-modo-lectura-simple\"],null]]]],[8],[0,\"\\n  \\n  \"],[1,[22,\"outlet\"],false],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"desafio-panel-izquierdo\"],[10,\"id\",\"panel-izquierdo\"],[8],[0,\"\\n\\n    \"],[5,\"pilas-canvas\",[],[[\"@pilas\",\"@onReady\",\"@escena\"],[[22,\"pilas\"],[28,\"action\",[[23,0,[]],\"onReady\"],null],[24,[\"model\",\"escena\"]]]]],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"contenedor-panel-ayuda\"],[10,\"id\",\"panel-ayuda\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"panel-ayuda puede-seleccionar\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"model\",\"grupo\",\"libro\",\"desafiosCortos\"]]],null,{\"statements\":[[0,\"          \"],[7,\"h4\",true],[8],[1,[24,[\"model\",\"grupo\",\"titulo\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"h4\",true],[8],[1,[24,[\"model\",\"titulo\"]],false],[9],[0,\"\\n\\n        \"],[7,\"p\",true],[8],[1,[24,[\"model\",\"enunciado\"]],false],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"model\",\"consignaInicial\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\",true],[10,\"class\",\"tip-block\"],[8],[0,\"\\n            \"],[7,\"p\",true],[8],[7,\"em\",true],[8],[0,\"Варто знати...\"],[9],[9],[0,\"\\n\\n            \"],[7,\"p\",true],[8],[1,[24,[\"model\",\"consignaInicial\"]],false],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n  \"],[9],[0,\"\\n\\n\"],[1,[28,\"pilas-splitter\",null,[[\"panel\",\"iframe\",\"ayuda\"],[\"#panel-izquierdo\",\"iframe\",\"#panel-ayuda\"]]],false],[0,\"\\n\\n    \"],[1,[28,\"pilas-blockly\",null,[[\"guardar\",\"registrarPrimerCodigo\",\"modoDocente\",\"modoAlumno\",\"hash\",\"idAlumno\",\"codigo\",\"showCode\",\"cargando\",\"modelActividad\",\"cuandoEjecuta\",\"model\",\"pasoAPasoHabilitado\",\"persistirSolucionEnURL\",\"debeMostrarFinDeDesafio\",\"pilas\",\"bloques\",\"onChangeWorkspace\",\"onTerminoEjecucion\"],[\"guardar\",\"registrarPrimerCodigo\",[24,[\"modoDocente\"]],[24,[\"modoAlumno\"]],[24,[\"hash\"]],[24,[\"idAlumno\"]],[24,[\"codigo\"]],[24,[\"showCode\"]],[24,[\"cargando\"]],[24,[\"model\"]],[24,[\"cuandoEjecuta\"]],[24,[\"model\"]],[24,[\"model\",\"debugging\"]],[24,[\"persistirSolucionEnURL\"]],[24,[\"debeMostrarFinDeDesafio\"]],[24,[\"pilas\"]],[24,[\"model\",\"bloques\"]],[24,[\"onChangeWorkspace\"]],[24,[\"onTerminoEjecucion\"]]]]],false],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-editor.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-header", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "h3ImePbt",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\\n\"],[7,\"nav\",true],[10,\"class\",\"navbar navbar-default\"],[10,\"role\",\"navigation\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"container-fluid\"],[8],[0,\"\\n    \"],[2,\" Brand and toggle get grouped for better mobile display \"],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"navbar-header navbar-collapse\"],[8],[0,\"\\n      \"],[7,\"a\",true],[10,\"class\",\"navbar-brand\"],[10,\"href\",\"#\"],[8],[7,\"img\",true],[10,\"src\",\"imagenes/logo.png\"],[8],[9],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[2,\" Collect the nav links, forms, and other content for toggling \"],[0,\"\\n    \"],[7,\"div\",true],[10,\"id\",\"bs-example-navbar-collapse-1\"],[8],[0,\"\\n      \"],[7,\"ul\",true],[10,\"class\",\"nav navbar-nav\"],[8],[0,\"\\n        \"],[4,\"link-to\",null,[[\"tagName\",\"route\"],[\"li\",\"libros\"]],{\"statements\":[[7,\"a\",true],[10,\"href\",\"#\"],[8],[7,\"i\",true],[10,\"class\",\"fa fa-home\"],[8],[9],[0,\" Домівка\"],[9]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"link-to\",null,[[\"tagName\",\"route\",\"model\"],[\"li\",\"libros.verLibro\",1]],{\"statements\":[[7,\"a\",true],[10,\"href\",\"#\"],[8],[7,\"i\",true],[10,\"class\",\"fa fa-book\"],[8],[9],[0,\" Простіше\"],[9]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"link-to\",null,[[\"tagName\",\"route\",\"model\"],[\"li\",\"libros.verLibro\",2]],{\"statements\":[[7,\"a\",true],[10,\"href\",\"#\"],[8],[7,\"i\",true],[10,\"class\",\"fa fa-book\"],[8],[9],[0,\" Складніше\"],[9]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"link-to\",null,[[\"tagName\",\"route\"],[\"li\",\"acercade\"]],{\"statements\":[[7,\"a\",true],[10,\"href\",\"#\"],[8],[7,\"i\",true],[10,\"class\",\"fa fa-info-circle\"],[8],[9],[0,\" Про програму\"],[9]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n\\n      \"],[7,\"div\",true],[10,\"class\",\"header-right\"],[8],[0,\"\\n\\n        \"],[7,\"div\",true],[10,\"class\",\"navbar-header navbar-collapse\"],[8],[0,\"\\n          \"],[2,\" Haciendo que el logo de programar no se colapse, y desaparezca en mobile. \"],[0,\"\\n\"],[4,\"unless\",[[28,\"media\",[\"isMobile\"],null]],null,{\"statements\":[[0,\"            \"],[4,\"pilas-link\",null,[[\"href\"],[\"http://program.ar\"]],{\"statements\":[[7,\"img\",true],[10,\"src\",\"imagenes/programar-short.png\"],[8],[9]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\\n        \"],[1,[22,\"pilas-automatic-update\"],false],[0,\"\\n\\n        \"],[7,\"button\",false],[12,\"class\",\"header-button\"],[12,\"id\",\"abrir-ayuda\"],[3,\"action\",[[23,0,[]],\"abrirAyuda\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-question\"],[10,\"aria-hidden\",\"true\"],[8],[9],[9],[0,\"\\n      \"],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[1,[28,\"modal-ayuda\",null,[[\"mostrar\"],[[24,[\"mostrarDialogoAyuda\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-header.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-libro", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Pl7Ky4K+",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"libros.verLibro\",[24,[\"libro\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"if\",[[24,[\"libro\",\"nombre\"]]],null,{\"statements\":[[0,\"    \"],[7,\"img\",true],[11,\"src\",[29,[\"imagenes/libros/\",[24,[\"libro\",\"nombre\"]],\".png\"]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"h2\",true],[8],[1,[24,[\"libro\",\"titulo\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"p\",true],[8],[1,[24,[\"libro\",\"descripcion\"]],false],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-libro.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-link", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Op7txFQc",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[24,[\"inElectron\"]]],null,{\"statements\":[[0,\"  \"],[7,\"a\",false],[12,\"href\",\"\"],[3,\"action\",[[23,0,[]],\"abrirConNavegadorExterno\",[24,[\"href\"]]]],[8],[14,1],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"a\",true],[11,\"href\",[22,\"href\"]],[10,\"target\",\"_blank\"],[8],[14,1],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-link.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-notificador", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "c/oVisCv",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[\"pilas-notificador \",[28,\"if\",[[24,[\"hayActualizacion\"]],\"pilas-notificador-visible\",\"pilas-notificador-oculto\"],null]]]],[8],[0,\"\\n  \"],[7,\"div\",false],[12,\"class\",\"pilas-notificador-cerrar\"],[3,\"action\",[[23,0,[]],\"cerrar\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-close\"],[8],[9],[9],[0,\"\\n\\n  \"],[7,\"p\",true],[8],[0,\"Hay una nueva versión disponible para descargar.\"],[9],[0,\"\\n  \"],[7,\"p\",true],[8],[0,\"Visitá \"],[4,\"pilas-link\",null,[[\"href\"],[[24,[\"linkDescarga\"]]]],{\"statements\":[[0,\"nuestra web para más información.\"]],\"parameters\":[]},null],[9],[0,\"\\n\\n  \"],[14,1],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-notificador.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-solution-file", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ErvMZCJM",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\\n\"],[7,\"input\",true],[10,\"id\",\"cargarActividadInput\"],[10,\"accept\",\".spbq\"],[10,\"class\",\"hidden\"],[10,\"type\",\"file\"],[8],[9],[0,\"\\n\"],[7,\"a\",true],[10,\"id\",\"placeholder\"],[10,\"class\",\"hidden\"],[8],[0,\"..\"],[9],[0,\"\\n\\n\"],[7,\"button\",false],[12,\"class\",\"btn btn-default\"],[3,\"action\",[[23,0,[]],\"abrirSolucion\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-folder-open-o\"],[8],[9],[0,\" Відкрити\"],[9],[0,\"\\n\\n\"],[7,\"button\",false],[12,\"class\",\"btn btn-default\"],[3,\"action\",[[23,0,[]],\"guardarSolucion\"]],[8],[7,\"i\",true],[10,\"class\",\"fa fa-download\"],[8],[9],[0,\" Зберегти\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-solution-file.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-spinner", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "N0O8/Is+",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\\n\"],[7,\"div\",true],[11,\"class\",[29,[\"spinner \",[28,\"if\",[[24,[\"centered\"]],\"spinner-centered\"],null]]]],[8],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-spinner.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-splitter", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "db21lTGS",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"splitter\"],[10,\"id\",\"splitter\"],[8],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"id\",\"over-splitter\"],[10,\"class\",\"over-splitter\"],[8],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-splitter.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/components/pilas-toggle", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "aFhcKgSy",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\\n\"],[7,\"label\",true],[10,\"class\",\"switch\"],[11,\"title\",[22,\"tooltip\"]],[8],[0,\"\\n    \"],[5,\"input\",[],[[\"@type\",\"@id\",\"@checked\",\"@disabled\"],[\"checkbox\",[22,\"element-id\"],[22,\"isChecked\"],[22,\"isDisabled\"]]]],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"slider round\"],[8],[7,\"i\",true],[11,\"class\",[29,[\"slider-icon \",[22,\"icon\"]]]],[8],[9],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/components/pilas-toggle.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafio-loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "7++S2KP0",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\"],[1,[22,\"pilas-cargando\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafio-loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafio", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lxXel3Kj",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"pilas-editor\",null,[[\"pilas\",\"model\",\"persistirSolucionEnURL\",\"codigo\",\"onReady\",\"debeMostrarFinDeDesafio\",\"onChangeWorkspace\"],[[24,[\"pilas\"]],[24,[\"model\"]],false,[24,[\"codigo\"]],[28,\"action\",[[23,0,[]],\"cuandoCargaPilas\"],null],true,[28,\"action\",[[23,0,[]],\"onChangeWorkspace\"],null]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafio.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafios-loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "SSBYe7sq",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\\n\"],[1,[22,\"pilas-cargando\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafios-loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafios", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zjY08us4",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafios.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafios/curso-alumno-error", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "2/Hs4D6u",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"contenido-principal\"],[8],[0,\"\\n\\n  \"],[7,\"h1\",true],[8],[0,\":(\"],[9],[0,\"\\n\\n  \"],[7,\"p\",true],[8],[0,\"Lo siento, la dirección URL no se puede decodificar,\\n  posiblemente el parámetro \"],[7,\"code\",true],[8],[0,\"hash\"],[9],[0,\" tenga un error\\n  de formato.\"],[9],[0,\"\\n\\n  \"],[7,\"p\",true],[8],[0,\"Por favor contacte al docente del curso para informar\\n  este error.\"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafios/curso-alumno-error.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafios/curso-alumno", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6ay4HLKW",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"pilas-editor\",null,[[\"pilas\",\"model\",\"persistirSolucionEnURL\",\"codigo\",\"modoAlumno\",\"hash\",\"idAlumno\",\"cuandoEjecuta\",\"debeMostrarFinDeDesafio\"],[[24,[\"pilas\"]],[24,[\"model\"]],false,[24,[\"model\",\"solucion\"]],true,[24,[\"model\",\"hash\"]],[24,[\"model\",\"idAlumno\"]],[28,\"route-action\",[\"cuandoEjecuta\"],null],true]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafios/curso-alumno.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafios/curso-docente", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DA9/bGQz",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"pilas-editor\",null,[[\"pilas\",\"model\",\"modoDocente\",\"persistirSolucionEnURL\",\"codigo\",\"debeMostrarFinDeDesafio\"],[[24,[\"pilas\"]],[24,[\"model\"]],true,false,[24,[\"model\",\"solucion\"]],true]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafios/curso-docente.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafios/desafio-por-nombre-error", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "JvfOYU2w",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"contenido-principal\"],[8],[0,\"\\n\\n  \"],[7,\"h2\",true],[8],[0,\"Lo siento, algo salió mal...\"],[9],[0,\"\\n\\n  \"],[7,\"p\",true],[8],[0,\"No existe un desafío con el nombre indicado en la URL. ¿Podrías\\n    corroborar la correctitud de la dirección a este desafío?.\"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafios/desafio-por-nombre-error.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/desafios/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "EAJ8U0LX",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"contenido-principal\"],[8],[0,\"\\n\\n  \"],[7,\"p\",true],[8],[0,\"Elegí uno de los libros de la barra superior\"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/desafios/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/galeria", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NPnPiYeI",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"contenido-principal\"],[8],[0,\"\\n  \"],[7,\"h1\",true],[8],[0,\"Galería de bloques\"],[9],[0,\"\\n\\n  \"],[7,\"p\",true],[8],[0,\"Esta sección muestra los bloques que actualmente migramos a\\n    la nueva versión de blockly.\"],[9],[0,\"\\n\\n  \"],[7,\"p\",true],[8],[0,\"Esta información es temporal, y solo estará visible en el branch\\n  \"],[7,\"code\",true],[8],[0,\"feature/actualizar-blockly\"],[9],[0,\".\"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"padding\"],[8],[0,\"\\n    \"],[1,[28,\"ember-blockly-catalog\",null,[[\"current_block\"],[[24,[\"current_block\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/galeria.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3W6j39Zs",
    "block": "{\"symbols\":[],\"statements\":[],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/libros/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lRqRtTKA",
    "block": "{\"symbols\":[\"libro\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"contenido-principal\"],[8],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"box\"],[8],[0,\"\\n    \"],[7,\"p\",true],[8],[7,\"img\",true],[10,\"class\",\"main-logo\"],[10,\"src\",\"images/main-logo.png\"],[10,\"width\",\"468\"],[10,\"height\",\"262\"],[8],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"\\n      Привіт! Ласкаво просимо до \"],[7,\"strong\",true],[8],[0,\"Розумних блоків\"],[9],[0,\",\\n     - засобу, який навчить програмувати.\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[8],[0,\"\\n      Завдання, які ми пропонуємо, організовано у дві групи:\\n    \"],[9],[0,\"\\n\\n\"],[4,\"each\",[[24,[\"model\"]]],null,{\"statements\":[[4,\"unless\",[[23,1,[\"oculto\"]]],null,{\"statements\":[[0,\"        \"],[1,[28,\"pilas-libro\",null,[[\"libro\"],[[23,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\n    \"],[7,\"hr\",true],[8],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[8],[0,\"\\n      Перегляньте в меню \"],[4,\"link-to\",null,[[\"route\"],[\"acercade\"]],{\"statements\":[[7,\"strong\",true],[8],[0,\"Про програму\"],[9]],\"parameters\":[]},null],[0,\"\\n      щоб дізнатись більше, про можливості засобу та про тих, хто його розробив.\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[8],[0,\"\\n      Якщо вам потрібна допомога, натисніть (\"],[7,\"i\",true],[10,\"class\",\"fa fa-question\"],[10,\"aria-hidden\",\"true\"],[8],[9],[0,\") розташований у верхньому правому куті\\n      екрана.\\n    \"],[9],[0,\"\\n\\n  \"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/libros/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/templates/libros/ver-libro", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5hfj6Mab",
    "block": "{\"symbols\":[\"grupo\",\"desafio\"],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[\"contenido-principal \",[28,\"if\",[[24,[\"model\",\"modoLecturaSimple\"]],\"aplicar-modo-lectura-simple\"],null]]]],[8],[0,\"\\n\\n  \"],[7,\"h1\",true],[8],[0,\"Завдання: \"],[1,[24,[\"model\",\"titulo\"]],false],[9],[0,\"\\n\\n  \"],[7,\"p\",true],[8],[4,\"link-to\",null,[[\"route\"],[\"libros\"]],{\"statements\":[[7,\"i\",true],[10,\"class\",\"fa fa-chevron-left\"],[8],[9],[0,\" Повернутися до переліку розділів\"]],\"parameters\":[]},null],[9],[0,\"\\n\\n\"],[4,\"each\",[[24,[\"model\",\"grupos\"]]],null,{\"statements\":[[0,\"\\n    \"],[7,\"h2\",true],[8],[1,[23,1,[\"titulo\"]],false],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,1,[\"desafios\"]]],null,{\"statements\":[[0,\"      \"],[1,[28,\"pilas-desafio\",null,[[\"model\"],[[23,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[0,\"    \"],[7,\"p\",true],[10,\"class\",\"mensaje-sin-desafios\"],[8],[0,\"Lo siento, no hay desafíos para este manual aún.\"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[24,[\"model\",\"grupos\",\"isSettled\"]]],null,{\"statements\":[[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[22,\"pilas-cargando\"],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pilasbloques/templates/libros/ver-libro.hbs"
    }
  });

  _exports.default = _default;
});
;define("pilasbloques/tests/mirage/mirage/config.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/fixtures/desafios.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/fixtures/desafios.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/desafios.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/fixtures/grupos.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/fixtures/grupos.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/grupos.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/fixtures/libros.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/fixtures/libros.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/libros.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/models/desafio.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/models/desafio.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/desafio.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/models/grupo.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/models/grupo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/grupo.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/models/libro.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/models/libro.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/libro.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/scenarios/default.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/scenarios/default.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass jshint.');
  });
});
;define("pilasbloques/tests/mirage/mirage/serializers/application.jshint.lint-test", [], function () {
  "use strict";

  QUnit.module('JSHint | mirage/serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass jshint.');
  });
});
;

;define('pilasbloques/config/environment', [], function() {
  var prefix = 'pilasbloques';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("pilasbloques/app")["default"].create({"name":"pilasbloques","version":"1.5.2+8bec55fb"});
          }
        
//# sourceMappingURL=pilasbloques.map
