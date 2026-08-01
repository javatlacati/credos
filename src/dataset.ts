export const initialNodes = [
  // {
  //   id: 'h0', position: {x: 600, y: 0}, data: {label: 'Hechos históricos'}, style: {
  //     width: 370,
  //     height: 640,
  //   },
  // },
  {
    id: 'd0',
    type: 'ResizableNodeSelected', position: {x: 300, y: 0}, data: {label: 'Doctrinas'}, style: {
      width: 370,
      height: 840,
    },
  },
  {
    id: 'c0',
    type: 'ResizableNodeSelected', position: {x: 0, y: 0}, data: {label: 'Credos'}, style: {
      width: 370,
      height: 840,
    },
  },
  {
    id: 'f0',
    type: 'ResizableNodeSelected', position: {x: 0, y: 800}, data: {label: 'Fuentes'}, style: {
      width: 370,
      height: 840,
    },
  },

  {
    id: 'c0.1',
    parentId: 'c0',
    type: 'ResizableNodeSelected',
    position: {x: 5, y: 5},
    data: {label: 'Cristianos según otras religiones'},
    extent: 'parent',
    style: {
      width: 360,
      height: 640,
    },
  }, {
    id: 'c0.2',
    parentId: 'c0.1',
    type: 'ResizableNodeSelected',
    position: {x: 0, y: 0},
    data: {label: 'Protestante tradicional'},
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'c0.3',
    parentId: 'c0.1',
    type: 'ResizableNodeSelected', position: {x: 0, y: 0}, data: {label: 'Evangélico'}, extent: 'parent', style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'c0.4',
    parentId: 'c0.1',
    type: 'ResizableNodeSelected', position: {x: 0, y: 0}, data: {label: 'Sectas'}, extent: 'parent', style: {
      width: 200,
      height: 240,
    },
  },
  {
    id: 'c1',
    type: 'ResizableNodeSelected',
    parentId: 'c0',
    position: {x: 0, y: 0},
    data: {label: 'Judaismo'},
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  },
  {
    id: 'c2',
    type: 'ResizableNodeSelected',
    parentId: 'c0.1',
    position: {x: 0, y: 0},
    data: {label: 'Católico Apostólico Romano'},
    extent: 'parent',
    style: {
      width: 200,
      height: 180,
    }
  },
  {id: 'c3', type: 'input', parentId: 'c0.1', position: {x: 0, y: 0}, data: {label: 'Anglicano'}, extent: 'parent'},
  {
    id: 'c4', parentId: 'c1', position: {x: 0, y: 0}, data: {label: 'Fariseo'}, extent: 'parent'
  }, {
    id: 'c5', parentId: 'c1', position: {x: 0, y: 0}, data: {label: 'Saduceo'}, extent: 'parent'
  }, {
    id: 'c6', parentId: 'c2', position: {x: 0, y: 0}, data: {label: 'La Luz Del Mundo'}, extent: 'parent'
  }, {
    id: 'c7', parentId: 'c0.1', position: {x: 0, y: 0}, data: {label: 'Catolico Ortodoxo Oriental'}, extent: 'parent'
  }, {
    id: 'c8', parentId: 'c0.1', position: {x: 0, y: 0}, data: {label: 'Catolico Ortodoxo Del Este'}, extent: 'parent'
  }, {
    id: 'c9', parentId: 'c0.2', position: {x: 0, y: 0}, data: {label: 'Luterano'}, extent: 'parent'
  }, {
    id: 'c10', parentId: 'c0.2', position: {x: 0, y: 0}, data: {label: 'Presbiteriano'}, extent: 'parent'
  }, {
    id: 'c11', parentId: 'c0.2', position: {x: 0, y: 0}, data: {label: 'Calvinista'}, extent: 'parent'
  }, {
    id: 'c12', parentId: 'c0.2', position: {x: 0, y: 0}, data: {label: 'Anabaptista'}, extent: 'parent'
  }, {
    id: 'c13', parentId: 'c0.3', position: {x: 0, y: 0}, data: {label: 'Metodista'}, extent: 'parent'
  }, {
    id: 'c14', parentId: 'c0.3', position: {x: 0, y: 0}, data: {label: 'Bautista'}, extent: 'parent'
  }, {
    id: 'c15', parentId: 'c0.3', position: {x: 0, y: 0}, data: {label: 'Bautista Reformado'}, extent: 'parent'
  }, {
    id: 'c16',
    parentId: 'c0.1',
    position: {x: 0, y: 0},
    data: {
      label: 'Puritano',
      note: 'Movimiento de reforma dentro del anglicanismo y otras iglesias protestantes que enfatizaba el estudio de la Biblia, la disciplina moral y la purificación de la iglesia; en gran medida se fusionó con otras denominaciones.'
    },
    extent: 'parent'
  }, {
    id: 'c17', parentId: 'c0.4', position: {x: 0, y: 460}, data: {label: 'Adventista del séptimo día'}, extent: 'parent'
  }, {
    id: 'c18', parentId: 'c0.4', position: {x: 0, y: 460}, data: {label: 'Modalista'}, extent: 'parent'
  }, {
    id: 'c19', parentId: 'c0.4', position: {x: 0, y: 460}, data: {label: 'Mormón'}, extent: 'parent'
  }, {
    id: 'c20', parentId: 'c0.4', position: {x: 0, y: 460}, data: {label: 'Atalayas'}, extent: 'parent'
  }, {
    id: 'c21',
    parentId: 'c1',
    position: {x: 0, y: 0},
    data: {
      label: 'Samaritanista',
      note: 'Las sectas samaritanas no se consideran a sí mismas una secta ni Judíos, sino que se ven como los guardianes originales de la Torá. Su diferencia principal con el judaísmo bíblico es que solo aceptan los cinco libros de Moisés (el Pentateuco Samaritano) y creen que el monte Gerizim es el lugar de adoración en lugar de Jerusalén.'
    },
    extent: 'parent'
  }, {
    id: 'c22',
    parentId: 'c2',
    position: {x: 0, y: 0},
    data: {
      label: 'Benedictinos',
      note: 'Orden monástica fundada por San Benito siguiendo la Regla de San Benito, que enfatiza la comunidad, la oración y el trabajo manual.'
    },
    extent: 'parent'
  }, {
    id: 'c23',
    parentId: 'c2',
    position: {x: 0, y: 0},
    data: {
      label: 'Carmelitas',
      note: 'Orden religiosa contemplativa que remonta sus raíces espirituales al profeta Elías en el Monte Carmelo, haciendo hincapié en la oración mística y la comunidad.'
    },
    extent: 'parent'
  }, {
    id: 'c24',
    parentId: 'c2',
    position: {x: 0, y: 0},
    data: {
      label: 'Franciscanos',
      note: 'Orden mendicante fundada por San Francisco que hace hincapié en la pobreza, la sencillez, la paz y el servicio a los pobres y marginados.'
    },
    extent: 'parent'
  }, {
    id: 'c25',
    parentId: 'c2',
    position: {x: 0, y: 0},
    data: {
      label: 'Dominicos',
      note: 'Orden de Predicadores fundada por Santo Domingo, que hace hincapié en la educación, el estudio teológico y la predicación contra la herejía.'
    },
    extent: 'parent'
  }, {
    id: 'c26',
    parentId: 'c2',
    position: {x: 0, y: 0},
    data: {
      label: 'Jesuitas',
      note: 'Orden religiosa de alta formación educativa fundada por San Ignacio de Loyola, dedicada a la labor misionera, la educación y el servicio a la Iglesia.'
    },
    extent: 'parent'
  },

  {
    id: 'd0.1',
    type: 'ResizableNodeSelected',
    parentId: 'd0',
    position: {x: 9, y: 48},
    data: {
      label: 'Teología propia',
      note: 'La naturaleza de Dios, así como milagros'
    },
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'd0.2',
    type: 'ResizableNodeSelected',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Escritura y Autoridad',
    },
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'd0.3',
    type: 'ResizableNodeSelected',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Soteriología',
      note: 'La soteriología es el estudio de la salvación en diversas religiones, especialmente en el cristianismo. El término proviene del griego "soteria" (salvación) y "logos" (estudio o palabra). Se enfoca en preguntas clave como de qué se necesita salvación, cómo se obtiene y qué papel juega la divinidad en ese proceso.'
    },
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'd0.4',
    type: 'ResizableNodeSelected',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Eclesiología ',
      note: 'Naturaleza y Estructura de la Iglesia'
    },
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'd0.5',
    type: 'ResizableNodeSelected',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Sacramentos y ritos',
    },
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'd0.6',
    type: 'ResizableNodeSelected',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Adoración y vida espiritual',
    },
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'd0.7',
    type: 'ResizableNodeSelected',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Escatología',
      note: 'La escatología es el estudio de las "cosas últimas", que en el ámbito de la teología se refiere a las creencias sobre el fin del mundo y la vida después de la muerte.'
    },
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'd0.8',
    type: 'ResizableNodeSelected',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Ética y vida secular',
    },
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'd0.9',
    type: 'ResizableNodeSelected',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Cristología',
      note: 'Estudio sistemático y ordenado que tiene como objeto la vida y la obra de Cristo. '
    },
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'd0.10',
    type: 'ResizableNodeSelected',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Pneumatología',
      note: 'La doctrina sobre la persona y la obra del Espíritu Santo.'
    },
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'd0.11',
    type: 'ResizableNodeSelected',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Hamartología',
      note: 'El estudio del pecado.'
    },
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  }, {
    id: 'd0.12',
    type: 'ResizableNodeSelected',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Enfoques teológicos generales',
    },
    extent: 'parent',
    style: {
      width: 200,
      height: 240,
    },
  },

  {
    id: 'd1',
    type: 'default',
    parentId: 'd0.11',
    position: {x: 0, y: 0},
    data: {
      label: 'InmaculadaConcepcion',
      note: 'María, la madre de Jesús, fue concebida sin pecado original para ser digna de ser la Madre de Dios.'
    },
    extent: 'parent'
  },
  {
    id: 'd2',
    type: 'default',
    parentId: 'd0.4',
    position: {x: 0, y: 0},
    data: {
      label: 'SucesionApostolica',
      note: 'Se afirma que el Papa es el sucesor de San Pedro y tiene la autoridad primacial sobre la Iglesia.'
    },
    extent: 'parent'
  },
  {
    id: 'd3',
    type: 'default',
    parentId: 'd0.7',
    position: {x: 0, y: 0},
    data: {
      label: 'Purgatorio',
      note: 'Las almas que mueren en gracia de Dios, pero no perfectamente purificadas, pasan por una purificación temporal después de la muerte para alcanzar la santidad necesaria para entrar al cielo'
    },
    extent: 'parent'
  },
  {
    id: 'd4',
    type: 'default',
    parentId: 'd0.11',
    position: {x: 0, y: 0},
    data: {
      label: 'Bautismo de Infantes',
      note: 'El bautismo libera a los infantes del pecado original heredado de Adán y Eva. Versículos: Mateo 28:19'
    },
    extent: 'parent'
  },
  {
    id: 'd5',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'InfalibilidadPapal',
      note: 'En ciertas condiciones (cuando habla ex cathedra), los pronunciamientos del papa son infalibles.'
    },
    extent: 'parent'
  },
  {
    id: 'd6',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {label: 'Miafisismo', note: 'La naturaleza divina y humana de Cristo están unidas en una sola naturaleza'},
    extent: 'parent'
  },
  {
    id: 'd7',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Theosis',
      note: 'La salvación es vista como el proceso de alcanzar la teosis "volverse más parecido a Dios" mediante la gracia'
    },
    extent: 'parent'
  },
  {
    id: 'd8',
    type: 'default',
    parentId: 'd0.7',
    position: {x: 0, y: 0},
    data: {label: 'InmortalidadDelAlma'},
    extent: 'parent'
  },
  {
    id: 'd9',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Glosolalia',
      note: 'vocalizaciones o sonidos similares al habla sin un significado lingüístico inteligible, a menudo descritos como "lenguajes de oración" o lenguas extáticas'
    },
    extent: 'parent'
  },
  {
    id: 'd10',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Xenoglosia',
      note: 'Hablar idiomas humanos reales desconocidos por el hablante, pero comprensibles para los oyentes. Versículos:Hechos 2'
    },
    extent: 'parent'
  },
  {
    id: 'd11',
    type: 'default',
    parentId: 'd0.10',
    position: {x: 0, y: 0},
    data: {label: 'Bautismo Del Espíritu'},
    extent: 'parent'
  },
  {
    id: 'd12',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {label: 'ProsperidadSobrenatural'},
    extent: 'parent'
  },
  {
    id: 'd13',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {label: 'GuerraEspiritual'},
    extent: 'parent'
  },
  {
    id: 'd14',
    type: 'default',
    parentId: 'd0.4',
    position: {x: 0, y: 0},
    data: {
      label: 'Restauracionismo',
      note: 'La iglesia cree que la Iglesia Católica se desvió del cristianismo primitivo y que su misión es restaurar la iglesia original de Jesucristo.'
    },
    extent: 'parent'
  },
  {
    id: 'd15',
    type: 'default',
    parentId: 'd0.1',
    position: {x: 0, y: 0},
    data: {label: 'Trinitario', note: 'Un solo Dios en tres personas iguales y eternas: Padre, Hijo y Espíritu Santo.'},
    extent: 'parent'
  },
  {
    id: 'd16',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {label: 'CincoSolas', note: 'sola Fide, sola Gratia, sola Scriptura, solus Christus, soli Deo Gloria'},
    extent: 'parent'
  },
  {
    id: 'd17',
    type: 'default',
    parentId: 'd0.7',
    position: {x: 0, y: 0},
    data: {
      label: 'mortalismo',
      note: 'Sostiene que el alma no es inmortal y que la vida del individuo cesa con la muerte física. Concepto relacionado al "sueño del alma" (la creencia de que no hay conciencia entre la muerte y la resurrección) Versículos: Ezequiel 18:4, Levítico 23:30, Luc. 6:9, Gén. 2:7, Eclesiastés 3:19, Eclesiastés 12:7'
    },
    extent: 'parent'
  },
  {
    id: 'd18',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Teologia Del Pacto',
      note: 'El nuevo pacto invalida al pacto antiguo o pactos antiguos'
    },
    extent: 'parent'
  },
  {
    id: 'd19',
    type: 'default',
    parentId: 'd0.4',
    position: {x: 0, y: 0},
    data: {
      label: 'Dispensacionalismo',
      note: 'Distinción entre Israel y la Iglesia. La dispensación teológica enseña que hay dos clases del pueblo de Dios: Israel y la Iglesia. Los dispensacionalistas creen que la salvación siempre ha sido por gracia por medio de la fe (En Dios en el Antiguo Testamento, y específicamente en Dios Hijo en el Nuevo Testamento). Los dispensacionalistas sostienen que la Iglesia no ha reemplazado a Israel en el programa de Dios y que las promesas a Israel en el Antiguo Testamento no han sido transferidas a la Iglesia. Ellos creen que las promesas que Dios hizo a Israel (de la tierra, muchos descendientes y bendiciones) en el Antiguo Testamento, serán finalmente cumplidas en el período del milenio del que se habla en Apocalipsis 20. Creen que, así como Dios en la época actual enfoca Su atención en la Iglesia, Él nuevamente en el futuro, enfocará Su atención en Israel (Romanos 9-11 y Daniel 9:24).\n' +
        '\n' +
        'Usando este sistema como base, los dispensacionalistas entienden que la Biblia está organizada en siete dispensaciones; Inocencia (Génesis 1:1 – 3:7), Conciencia (Génesis 3:8 – 8:22), Gobierno Humano (Génesis 9:11 – 11:32), Promesa (Génesis 12:1 – Éxodo 19:25), Ley (Éxodo 20:1 – Hechos 2:4), Gracia (Hechos 2:4 – Apocalipsis 20:3), y el Reino Milenial (Apocalipsis 20:4-6).'
    },
    extent: 'parent'
  },
  {
    id: 'd20',
    type: 'default',
    parentId: 'd0.7',
    position: {x: 0, y: 0},
    data: {
      label: 'Premilenialismo',
      note: 'Jesucristo regresará antes de establecer un reino físico literal de 1000 años en la Tierra, donde reinará con sus santos.'
    },
    extent: 'parent'
  },
  {
    id: 'd21',
    type: 'default',
    parentId: 'd0.7',
    position: {x: 0, y: 0},
    data: {
      label: 'Amilenialismo',
      note: 'Niega un reino terrenal literal de 1000 años. El "milenio" se interpreta de forma simbólica, refiriéndose al período actual entre la primera y la segunda venida de Cristo, durante el cual Cristo reina espiritualmente desde el cielo.'
    },
    extent: 'parent'
  },
  {
    id: 'd22',
    type: 'default',
    parentId: 'd0.7',
    position: {x: 0, y: 0},
    data: {
      label: 'Posmilenialismo',
      note: 'Jesucristo regresará después de un período prolongado (el "milenio" simbólico) en el que el evangelio habrá tenido un gran éxito, resultando en que la mayoría de las personas se convertirán al cristianismo y habrá paz y prosperidad en la Tierra.'
    },
    extent: 'parent'
  },
  {
    id: 'd23',
    type: 'default',
    parentId: 'd0.1',
    position: {x: 0, y: 0},
    data: {
      label: 'Unitarismo (solo el Padre es Dios)',
      note: 'Jesús es subordinado, un ser creado o un gran profeta, pero no Dios en el mismo sentido que el Padre.'
    },
    extent: 'parent'
  },
  {
    id: 'd24',
    type: 'default',
    parentId: 'd0.1',
    position: {x: 0, y: 0},
    data: {
      label: 'Modalista/Unicitario',
      note: 'Padre, Hijo y Espíritu Santo son diferentes modos o manifestaciones del único Dios, que es Jesús. Las Asambleas de Dios rechazaron la doctrina unicitaria en 1916, cuando su concilio general adoptó una resolución para convertirse en una comunidad trinitaria, expulsando de facto a los ministros y miembros que no aceptaban esta postura. Esta decisión llevó a que 156 ministros abandonaran la organización.'
    },
    extent: 'parent'
  },
  {
    id: 'd25',
    type: 'default',
    parentId: 'd0.1',
    position: {x: 0, y: 0},
    data: {
      label: 'Divinidad de seres distintos',
      note: 'Padre, Hijo y Espíritu Santo son tres personajes distintos y glorificados, unidos en propósito pero no en sustancia.'
    },
    extent: 'parent'
  },
  {
    id: 'd26',
    type: 'default',
    parentId: 'd0.1',
    position: {x: 0, y: 0},
    data: {
      label: 'Dios como Principio/Mente',
      note: 'Dios es una Mente o Principio divino incorpóreo y omnibondadoso.'
    },
    extent: 'parent'
  },
  {
    id: 'd26',
    type: 'default',
    parentId: 'd0.9',
    position: {x: 0, y: 0},
    data: {
      label: 'Patripacionismo',
      note: 'Sostenía una unidad unipersonal de Dios (un solo ser divino) y afirmaba que fue el mismísimo Dios Padre quien sufrió la pasión y murió en la cruz, manifestándose como Hijo. Sus principales defensores históricos fueron Práxeas y Sabelio (de ahí el término sabelianismo o modalismo).'
    },
    extent: 'parent'
  },
  {
    id: 'd27',
    type: 'default',
    parentId: 'd0.9',
    position: {x: 0, y: 0},
    data: {
      label: 'Preexistencia de Cristo',
      note: 'Jn 8:58, Jn 17:4'
    },
    extent: 'parent'
  },
  {
    id: 'd28',
    type: 'default',
    parentId: 'd0.9',
    position: {x: 0, y: 0},
    data: {
      label: 'Nestorianismo',
      note: 'considera que en Cristo existen dos naturalezas, la divina y la humana, separadas y no unidas en una sola persona'
    },
    extent: 'parent'
  },
  {
    id: 'd29',
    type: 'default',
    parentId: 'd0.9',
    position: {x: 0, y: 0},
    data: {
      label: 'Monotelismo',
      note: 'Doctrina del siglo VII que sostenía que en Cristo existían dos naturalezas (divina y humana) pero una sola voluntad divina. Esta doctrina buscaba ser un compromiso entre el monofisismo y el cristianismo trinitario, pero fue condenada como herejía en el Tercer Concilio de Constantinopla (680-681), que reafirmó la doctrina del diotelismo (dos voluntades, una humana y una divina).'
    },
    extent: 'parent'
  },
  {
    id: 'd30',
    type: 'default',
    parentId: 'd0.9',
    position: {x: 0, y: 0},
    data: {
      label: 'Diotelismo',
      note: 'afirma que Jesucristo Jesús tiene una voluntad divina y una voluntad humana.'
    },
    extent: 'parent'
  },
  {
    id: 'd31',
    type: 'default',
    parentId: 'd0.6',
    position: {x: 0, y: 0},
    data: {
      label: 'Reunión sabatina',
      note: ''
    },
    extent: 'parent'
  },
  {
    id: 'd32',
    type: 'default',
    parentId: 'd0.6',
    position: {x: 0, y: 0},
    data: {
      label: 'Reunión dominical',
      note: 'Hechos 20:7'
    },
    extent: 'parent'
  },
  {
    id: 'd33',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Juicio investigador',
      note: 'Postula que un juicio divino para los profesos cristianos comenzó en 1844 y continúa hasta la segunda venida de Jesús. Durante esta etapa, se examinan los registros de las vidas de cada persona para determinar su dignidad de salvación, y el resultado se basa en si han aceptado la expiación de Cristo. Dn 8:14'
    },
    extent: 'parent'
  },
  {
    id: 'd34',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Prohibición de anticonceptivos',
      note: '' //no hay versículos
    },
    extent: 'parent'
  },
  {
    id: 'd35',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Pastorado Femenino',
      note: 'Gn 29:9, Ga 3:26-28, Jo 2:28, '
    },
    extent: 'parent'
  },
  {
    id: 'd36',
    type: 'default',
    parentId: 'd0',
    position: {x: 0, y: 0},
    data: {
      label: 'Soloismo Bíblico',
      note: '1 Co 4:6, Ap 22:18-19'
    },
    extent: 'parent'
  },

  {
    id: 'f1',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Torá',
      note: 'Significa "instrucción" o "enseñanza" (comúnmente, aunque con menor precisión, "la Ley"). Comprende los primeros cinco libros, también conocidos como el Pentateuco: Génesis, Éxodo, Levítico, Números y Deuteronomio. Escrita en el idioma Hebreo como lengua sagrada y litúrgica'
    },
    extent: 'parent'
  }, {
    id: 'f2',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Nevi\'im',
      note: 'Significa "Profetas". Esta sección incluye los libros de los profetas, como Josué, Jueces, Samuel, Reyes, Isaías, Jeremías, Ezequiel y los doce profetas menores. Escrita en el idioma Hebreo como lengua sagrada y litúrgica'
    },
    extent: 'parent'
  }, {
    id: 'f3',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Ketuvim',
      note: 'Significa "Escritos". Incluye textos como Salmos, Proverbios, Job, Cantar de los Cantares, Rut, Lamentaciones, Eclesiastés, Ester, Daniel, Esdras, Nehemías y Crónicas. Escrita en el idioma Hebreo como lengua sagrada y litúrgica'
    },
    extent: 'parent'
  }, {
    id: 'f4',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Talmud',
      note: 'Es una vasta recopilación de comentarios, discusiones e interpretaciones rabínicas sobre la Torá y la ley judía, transmitida originalmente de forma oral durante generaciones. Incluye la Mishná (código de leyes) y la Guemará (discusión y comentario sobre la Mishná). Contiene material tanto legal (halajá) como no legal (aggadá), que incluye debates, leyes, ética, historias y folclore.'
    },
    extent: 'parent'
  }, {
    id: 'f5',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Midrash ',
      note: 'Método de interpretación de la Torá a través de comentarios y narrativas (tanto legales como éticas).Incluye comentarios legales (halájicos), narrativos (agádicos), homiléticos y folclore.'
    },
    extent: 'parent'
  }, {
    id: 'f6',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Deuterocanónicos',
      note: ' Tobías, Judit, 1 y 2 Macabeos, Sabiduría, Eclesiástico(Sirach o Sabiduría), Baruc y adiciones a los libros de Ester y Daniel.'
    },
    extent: 'parent'
  }, {
    id: 'f7',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Apócrifos',
      note: 'Evangelios apócrifos: El Evangelio de Tomás, el Protoevangelio de Santiago y el Evangelio de Pedro\n' +
        'Hechos apócrifos: Hechos de Pablo, Hechos de Tomás, Hechos de Pedro\n' +
        'Otros: El Apocalipsis de Pablo, el Libro de Enoc, Jublee, Book of Joshua the son of Sirac, The Book of Josephas the Son of Bengorion, Sirate Tsion (the book of order), Tizaz (the book of Herald), Gitsew, Abtilis, The I book of Dominos 1 and 2, The book of Clement, Didascalia. Fuente: https://www.ethiopianorthodox.org/english/canonical/books.html'
    },
    extent: 'parent'
  }, {
    id: 'f8',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Libro de Mormón',
      note: 'Un texto que contiene la historia de los pueblos de la antigua América y un relato del ministerio de Cristo. https://www.churchofjesuschrist.org/study/scriptures/bofm?lang=spa'
    },
    extent: 'parent'
  }, {
    id: 'f9',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Doctrina y convenios',
      note: 'Contiene revelaciones de José Smith sobre la organización de la Iglesia y la explicación de sus doctrinas. https://www.churchofjesuschrist.org/study/scriptures/dc-testament?lang=spa'
    },
    extent: 'parent'
  }, {
    id: 'f10',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Perla de Gran Precio',
      note: 'Incluye otras revelaciones de José Smith, así como textos como los Artículos de Fe, que se consideran escritura canónica. https://www.churchofjesuschrist.org/study/scriptures/pgp?lang=spa'
    },
    extent: 'parent'
  }, {
    id: 'f11',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Reina-Valera (RVR)',
      note: 'La Reina-Valera es una de las traducciones de la Biblia al español más frecuentemente utilizadas entre los protestantes hispanohablantes. Cuenta con varias revisiones a través de los años (1862, 1909, 1960, 1977, 1995, 2009, 2011, 2015, 2020). Las versiones originales de la Biblia Reina-Valera contaban con los deuterocanónicos o apócrifos, los cuales fueron retirados por el anglicano Lorenzo Lucena Pedrosa de la Universidad de Oxford en 1862.'
    },
    extent: 'parent'
  }, {
    id: 'f12',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Traducción del Nuevo Mundo (TNM)',
      note: 'Es la traducción oficial de la Sociedad Watch Tower Bible and Tract, que fue creada en 1950 para ser una traducción más precisa de los idiomas originales, utilizando el nombre "Jehová". https://www.jw.org/es/biblioteca/biblia/'
    },
    extent: 'parent'
  }, {
    id: 'f13',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Targum Onkelos',
      note: 'Traduce del hebreo al arameo judío babilonico. Su propósito principal es proporcionar una traducción autorizada y literal de la Torá (los cinco libros de Moisés) para los judíos, quienes leían el hebreo en las sinagogas pero necesitaban una traducción para comprenderlo.'
    },
    extent: 'parent'
  }, {
    id: 'f13',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Targum Jonathan (ben Uziel)',
      note: 'Traduce del hebreo al arameo Arameo oriental o babilónico. Su propósito principal es proporcionar una traducción Los Nevi\'im (Profetas) para los judíos, quienes leían el hebreo en las sinagogas pero necesitaban una traducción para comprenderlo. Su traducción es más interpretativa que Onkelos, contiene paráfrasis y glosas midráshicas.'
    },
    extent: 'parent'
  }, {
    id: 'f14',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'King James Version (KJV)',
      note: 'Publicada en 1611, se convirtió en la versión oficial de la Iglesia de Inglaterra y, con el tiempo, en una de las Biblias más usadas en el mundo de habla inglesa. Los deuterocanónicos dejaron de incluirse a partir de 1629'
    },
    extent: 'parent'
  }, {
    id: 'f15',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Septuaginta',
      note: 'La Biblia griega, también conocida como Biblia Septuaginta o Biblia de los Setenta, y generalmente abreviada LXX, es la traducción más antigua existente en griego koiné de los libros hebreos y arameos de la Biblia hebrea.'
    },
    extent: 'parent'
  }, {
    id: 'f16',
    parentId: 'f0',
    position: {x: 0, y: 0},
    data: {
      label: 'Lutherbibel',
      note: 'La Biblia de Lutero es una traducción del Antiguo Testamento desde las lenguas hebrea y aramea antiguas, y del Nuevo Testamento desde la koiné o griego helenístico al dialecto bajo alemán y moderno.Base textual: AT:Septuaginta, Texto masorético (versión de Jacob ben Hayyim ibn Adonijah). NT:Textus Receptus, Vulgata. https://www.biblegateway.com/versions/Luther-Bibel-1545-LUTH1545/'
    },
    extent: 'parent'
  },

];
export const initialEdges = [
  {id: 'c2-d1', source: 'c2', target: 'd1'},
  {id: 'c2-d2', source: 'c2', target: 'd2'},
  {id: 'c2-d3', source: 'c2', target: 'd3'},
  {id: 'c2-d4', source: 'c2', target: 'd4'},
  {id: 'c2-d5', source: 'c2', target: 'd5'},
  {id: 'c3-d1', source: 'c3', target: 'd1'},
  {id: 'c3-d3', source: 'c3', target: 'd3'},
  {id: 'c3-d4', source: 'c3', target: 'd4'},
  {id: 'c3-d21', source: 'c3', target: 'd21'},
  {id: 'c13-d21', source: 'c13', target: 'd21'},
  {id: 'c6-d14', source: 'c6', target: 'd14'},
  {id: 'c7-d6', source: 'c7', target: 'd6'},
  {id: 'c7-d7', source: 'c7', target: 'd7'},
  {id: 'c9-d4', source: 'c9', target: 'd4'},
  {id: 'c9-d21', source: 'c9', target: 'd21'},
  {id: 'c10-d4', source: 'c10', target: 'd4'},
  {id: 'c10-d21', source: 'c10', target: 'd21'},
  {id: 'c11-d4', source: 'c11', target: 'd4'},
  {id: 'c10-d10', source: 'c10', target: 'd10'},
  {id: 'c11-d10', source: 'c11', target: 'd10'},
  {id: 'c14-d10', source: 'c14', target: 'd10'},
  {id: 'c17-d14', source: 'c17', target: 'd14'},
  {id: 'c17-d17', source: 'c17', target: 'd17'},
  {id: 'c17-d19', source: 'c17', target: 'd19'},
  {id: 'c17-d31', source: 'c17', target: 'd31'},
  {id: 'c17-d33', source: 'c17', target: 'd33'},
  {id: 'c18-d16', source: 'c18', target: 'd16'},
  {id: 'c19-d8', source: 'c19', target: 'd8'},
  {id: 'c19-d14', source: 'c19', target: 'd14'},
  {id: 'c10-d18', source: 'c10', target: 'd18'},
  {id: 'c15-d18', source: 'c15', target: 'd18'},

  {id: 'c20-d17', source: 'c20', target: 'd17'},
  {id: 'c2-f6', source: 'c2', target: 'f6'},
  {id: 'c7-f6', source: 'c7', target: 'f6'},
  {id: 'c7-f7', source: 'c7', target: 'f7'},
  {id: 'c8-f7', source: 'c8', target: 'f7'},
  {id: 'c3-f6', source: 'c3', target: 'f6'},
  {id: 'c4-f1', source: 'c4', target: 'f1'},
  {id: 'c4-f2', source: 'c4', target: 'f2'},
  {id: 'c4-f3', source: 'c4', target: 'f3'},
  {id: 'c4-f5', source: 'c4', target: 'f5'},
  {id: 'c4-f13', source: 'c4', target: 'f13'},
  {id: 'c5-f1', source: 'c5', target: 'f1'},
  {id: 'c9-f11', source: 'c9', target: 'f11'},
  {id: 'c9-f16', source: 'c9', target: 'f16'},
  {id: 'c10-f11', source: 'c10', target: 'f11'},
  {id: 'c11-f11', source: 'c11', target: 'f11'},
  {id: 'c12-f11', source: 'c12', target: 'f11'},
  {id: 'c13-f11', source: 'c13', target: 'f11'},
  {id: 'c14-f11', source: 'c14', target: 'f11'},
  {id: 'c15-f11', source: 'c15', target: 'f11'},
  {id: 'c17-f11', source: 'c17', target: 'f11'},
  {id: 'c19-f8', source: 'c19', target: 'f8'},
  {id: 'c19-f9', source: 'c19', target: 'f9'},
  {id: 'c19-f10', source: 'c19', target: 'f10'},
  {id: 'c19-f11', source: 'c19', target: 'f11'},
  {id: 'c20-f12', source: 'c20', target: 'f12'},
  {id: 'c20-f14', source: 'c20', target: 'f14', label: 'Históricamente, usaban la KJV el mundo de habla inglesa'},
  {id: 'c21-f1', source: 'c21', target: 'f1'},
  {id: 'c7-f15', source: 'c7', target: 'f15'},
];
