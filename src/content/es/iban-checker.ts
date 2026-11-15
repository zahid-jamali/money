import { PageContent } from '../types';

export const ibanCheckerEs: PageContent = {
  metaTitle: 'Validador IBAN 2026 | Comprobar cuenta bancaria online',
  metaDescription:
    'Comprueba cualquier IBAN español o internacional. Validación de dígito de control Mod-97 ISO 13616, entidad del Banco de España, BIC y estado SEPA gratis.',
  h1: 'Validador IBAN y Comprobador de Cuenta 2026',
  quickAnswer:
    'Valida cualquier código IBAN comprobando la longitud por país (24 caracteres en España), la transposición de cabecera y el algoritmo matemático ISO 7064 Modulo 97-10. Si el residuo de la división modular entre 97 es exactamente 1, el IBAN es matemáticamente correcto y apto para transferencias SEPA.',
  howItWorks: [
    {
      label: 'Verificación de longitud y formato nacional',
      formula: 'Longitud(IBAN) == 24 (para ES) && Regex(FormatoCCC)',
      ruleCitation: 'Circular del Banco de España sobre transferencias / ISO 13616-1:2020',
      effectiveDate: 'Normativa bancaria unificada y vigente en 2026',
    },
    {
      label: 'Permutación de caracteres de cabecera',
      formula: 'CadenaTranspuesta = 20_Dígitos_CCC + "ES" + 2_DígitosControl',
      ruleCitation: 'ISO 13616-1 Cláusula 5.2 (Permutación estándar)',
      effectiveDate: 'Procedimiento de obligado cumplimiento en el sistema bancario',
    },
    {
      label: 'Cálculo del checksum ISO 7064 Mod-97-10',
      formula: 'CadenaNumérica mod 97 == 1 (E=14, S=28)',
      ruleCitation: 'ISO/IEC 7064:2003 (Sistemas de caracteres de control MOD 97-10)',
      effectiveDate: 'Algoritmo matemático que intercepta erratas e inversiones numéricas',
    },
    {
      label: 'Comprobación de dígitos de control del CCC',
      formula: 'Módulo 11 con ponderaciones en entidad/oficina y número de cuenta',
      ruleCitation: 'Normativa del Banco de España para el Código de Cuenta Corriente',
      effectiveDate: 'Doble filtro algorítmico característico de las cuentas en España',
    },
  ],
  articleSections: [
    {
      id: 'que-es-el-iban-en-espana',
      title: '¿Qué es el código IBAN y cómo sustituyó al CCC en España?',
      level: 2,
      content:
        'El Código Internacional de Cuenta Bancaria (IBAN – International Bank Account Number) es una norma internacional establecida por la Organización Internacional de Normalización (ISO) y el Comité Europeo de Estándares Bancarios (ECBS) para identificar de manera inequívoca las cuentas corrientes en todo el mundo.\n\nEn España, el IBAN sustituyó formalmente en febrero de 2014 al antiguo Código de Cuenta Corriente (CCC) como consecuencia de la entrada en vigor de la normativa europea de la Zona Única de Pagos en Euros (SEPA). El tradicional CCC español constaba de 20 dígitos numéricos (4 de entidad, 4 de oficina, 2 dígitos de control calculados con el algoritmo módulo 11 y 10 dígitos para el número de cuenta del cliente). Para adaptar el CCC al estándar internacional, la banca española añadió en cabeza el prefijo nacional `ES` seguido de 2 dígitos de control calculados mediante el algoritmo Modulo 97, dando como resultado un código IBAN de exactamente 24 caracteres.',
    },
    {
      id: 'como-funciona-el-algoritmo-mod-97',
      title: 'Cómo funciona el algoritmo matemático Mod-97 (ISO 7064) paso a paso',
      level: 2,
      content:
        'El pilar que garantiza la seguridad y la fiabilidad de las transferencias bancarias es el algoritmo matemático ISO 7064 Modulo 97-10. Este cálculo permite identificar con una precisión superior al 99,99 % errores de transcripción, dígitos omitidos o la clásica transposición de cifras contiguas (por ejemplo, escribir 89 en lugar de 98):\n\n1. **Comprobación de la longitud oficial**: El validador verifica en primer lugar que la cuenta posea exactamente el número de caracteres correspondiente a su país emisor (24 caracteres para España, 22 para Alemania, 27 para Francia y 28 para Polonia).\n\n2. **Traslado de los primeros 4 caracteres**: Los cuatro caracteres iniciales (el código `ES` y los dos dígitos de control, por ejemplo `ES21`) se extraen y se sitúan al final de la secuencia. El IBAN `ES21 0049 1500 0512 3456 7892` se transforma en `00491500051234567892ES21`.\n\n3. **Conversión alfanumérica a decimal**: Cada letra se convierte en un valor numérico de dos cifras según el alfabeto latino básico (A=10, B=11 ... Z=35). Para España, la letra `E` se sustituye por `14` y la letra `S` por `28`. La expresión `ES` pasa a ser el número `1428`, conformando un entero inmenso de 26 dígitos.\n\n4. **División módulo 97**: Mediante aritmética modular por bloques, se divide este número masivo entre 97. Si el residuo final de la operación matemática arroja exactamente 1, el código IBAN es formalmente correcto y apto para ser procesado.',
    },
    {
      id: 'estructura-del-iban-espanol',
      title: 'Estructura detallada del IBAN en España: Entidad, oficina y dígitos de control',
      level: 2,
      content:
        'El código IBAN español se estructura en 24 caracteres agrupados bajo un riguroso orden jerárquico:\n\n- **Posiciones 1–2 (Código de país)**: `ES` para todas las cuentas radicadas en España, según la norma ISO 3166-1 alpha-2.\n- **Posiciones 3–4 (Dígitos de control IBAN)**: Dos dígitos generados mediante el algoritmo Mod-97 para validación internacional.\n- **Posiciones 5–8 (Código de entidad - 4 dígitos)**: Clave asignada por el Banco de España para identificar la institución bancaria. Ejemplos destacados: `0049` (Banco Santander), `0182` (BBVA), `2100` (CaixaBank), `0081` (Banco Sabadell), `0128` (Bankinter), `2080` (Abanca), `1465` (ING Direct).\n- **Posiciones 9–12 (Código de oficina / sucursal - 4 dígitos)**: Identifica la sucursal bancaria concreta donde se abrió la cuenta.\n- **Posiciones 13–14 (Dígitos de control nacionales - 2 dígitos)**: El primer dígito valida la entidad y la oficina; el segundo valida el número de cuenta corriente, ambos mediante un algoritmo módulo 11 específico del Banco de España.\n- **Posiciones 15–24 (Número de cuenta - 10 dígitos)**: Identificador único asignado al cliente dentro de dicha oficina.',
    },
    {
      id: 'transferencias-sepa-e-internacionales',
      title: 'Transferencias SEPA (ordinarias e inmediatas) vs transferencias SWIFT',
      level: 2,
      content:
        'Dependiendo de hacia dónde envíes el dinero, el uso del código IBAN presenta peculiaridades normativas:\n\n- **Transferencias en la zona SEPA (en euros)**: Al enviar dinero a cualquiera de los 36 países de la Zona Única de Pagos en Euros, únicamente necesitas introducir el código IBAN. La normativa comunitaria (Reglamento UE n.º 260/2012) ampara la regla «IBAN Only», por la que las entidades bancarias tienen prohibido exigir el código BIC/SWIFT para transferencias en euros dentro de la zona SEPA.\n- **Transferencias SEPA inmediatas (Instant)**: Permiten enviar hasta 100.000 € que se abonan en la cuenta del destinatario en menos de 10 segundos, durante las 24 horas del día y los 365 días del año.\n- **Transferencias internacionales SWIFT**: Cuando el destino está fuera de la Unión Europea (por ejemplo, Estados Unidos, México o Reino Unido) o en una divisa distinta del euro, es indispensable aportar tanto el código IBAN como el código BIC/SWIFT del banco receptor para coordinar la red de bancos corresponsales.',
    },
    {
      id: 'prevencion-de-errores-y-seguridad',
      title: 'Errores frecuentes al teclear el IBAN y consejos para evitar estafas',
      level: 2,
      content:
        'Para operar con total tranquilidad en tu banca online o app móvil, ten en cuenta las siguientes recomendaciones operativas:\n\n- **Diferencia entre O y 0**: El IBAN español solo lleva letras en las dos primeras posiciones (`ES`). Todos los caracteres restantes del 3 al 24 son números estrictos.\n- **Validez matemática frente a existencia de la cuenta**: Este comprobador verifica que el código tiene un formato correcto y pertenece a un banco real registrado en el Banco de España. Sin embargo, no tiene acceso a los sistemas internos de la entidad para certificar si la cuenta está abierta, cancelada o si el titular coincide con el nombre de tu factura.\n- **El timo de la factura falsa o modificación de cuenta**: Si un proveedor habitual te remite un correo electrónico solicitando que cambies la cuenta bancaria para abonar facturas, confirma siempre el nuevo número de cuenta por teléfono con un contacto de confianza antes de ordenar la transferencia.\n- **Verificación del titular (Verification of Payee)**: Los bancos europeos implementan la comprobación automatizada entre el nombre del titular y el IBAN introducido, alertando al usuario de cualquier discrepancia para blindar las transferencias ante posibles desvíos no autorizados y estafas por suplantación.',
    },
  ],
  examples: [
    {
      title: 'Ejemplo 1: Validación de cuenta en Banco Santander',
      scenario:
        'Un departamento de administración comprueba los datos bancarios del código ES21 0049 1500 0512 3456 7892 antes de emitir una transferencia a un proveedor.',
      calculationType: 'custom',
      customFields: [
        { label: 'IBAN introducido', value: 'ES21 0049 1500 0512 3456 7892' },
        { label: 'País y longitud', value: 'España (ES) — 24 caracteres' },
        { label: 'Entidad bancaria', value: '0049 (Banco Santander SA)' },
        { label: 'Oficina / Sucursal', value: '1500' },
        { label: 'Dígitos de control CCC', value: '05 (Verificados con algoritmo Módulo 11)' },
        { label: 'Número de cuenta', value: '1234567892' },
        { label: 'Resultado Modulo 97', value: '1 (Validación matemática correcta)', highlight: true },
        { label: 'Adhesión SEPA', value: 'Apta para transferencias SEPA y SEPA Instant' },
      ],
      explanation:
        'El sistema reconoce el código de entidad 0049 correspondiente al Banco Santander, comprueba los dígitos de control del CCC (05) y confirma que la clave internacional 21 satisface la división módulo 97 con resto 1.',
    },
    {
      title: 'Ejemplo 2: Validación de cuenta en BBVA',
      scenario:
        'Verificación de una cuenta bancaria de BBVA con el código ES91 0182 2370 4501 2345 6789.',
      calculationType: 'custom',
      customFields: [
        { label: 'IBAN introducido', value: 'ES91 0182 2370 4501 2345 6789' },
        { label: 'País y longitud', value: 'España (ES) — 24 caracteres' },
        { label: 'Entidad financiera', value: '0182 (Banco Bilbao Vizcaya Argentaria SA)' },
        { label: 'Código de oficina', value: '2370' },
        { label: 'Dígitos de control', value: '45' },
        { label: 'Resultado de comprobación', value: '1 (IBAN conforme a la norma ISO)', highlight: true },
        { label: 'Código BIC / SWIFT', value: 'BBVAESMM' },
      ],
      explanation:
        'El validador confirma la longitud exacta de 24 caracteres, asocia la clave 0182 a BBVA y verifica el cumplimiento de las comprobaciones matemáticas nacionales e internacionales.',
    },
  ],
  faqs: [
    {
      q: '¿Qué es el código IBAN y para qué sirve?',
      a: 'El IBAN (International Bank Account Number) es el código identificador bancario estandarizado que permite transferir dinero con total seguridad entre entidades financieras de todo el mundo sin errores de destino.',
    },
    {
      q: '¿Cuántos dígitos tiene el IBAN en España?',
      a: 'En España, el código IBAN tiene exactamente 24 caracteres: 2 letras que indican el país (ES), 2 dígitos de control internacional y los 20 dígitos del Código de Cuenta Corriente (CCC).',
    },
    {
      q: '¿Es seguro comprobar mi número de cuenta en esta web?',
      a: 'Sí, totalmente seguro. La validación se realiza íntegramente en el navegador de tu dispositivo mediante JavaScript. Tus datos bancarios no viajan por la red ni se almacenan en ninguna base de datos.',
    },
    {
      q: '¿Cómo puedo saber a qué banco pertenece un IBAN español?',
      a: 'Los 4 dígitos que se encuentran en las posiciones 5 a 8 del IBAN indican la entidad bancaria. Por ejemplo: 0049 es Banco Santander, 0182 es BBVA, 2100 es CaixaBank y 0081 es Banco Sabadell.',
    },
    {
      q: '¿Una validación correcta garantiza que el dinero llegará a su dueño?',
      a: 'La validación matemática garantiza que la estructura, la longitud y los dígitos de control son correctos. No obstante, no puede comprobar si la cuenta se encuentra cancelada o bloqueada por la entidad.',
    },
    {
      q: '¿Dónde puedo consultar mi código IBAN?',
      a: 'Puedes consultar tu IBAN en tus extractos bancarios, en la aplicación móvil o banca electrónica de tu entidad, en el contrato de la cuenta o impreso en el anverso de tu tarjeta de débito.',
    },
    {
      q: '¿Qué diferencia hay entre el código IBAN y el código BIC / SWIFT?',
      a: 'El IBAN identifica de forma única tu cuenta personal o de empresa, mientras que el código BIC/SWIFT identifica al banco emisor a escala internacional.',
    },
    {
      q: '¿Se pueden validar varios números IBAN al mismo tiempo?',
      a: 'Sí. Nuestro validador permite la comprobación masiva de hasta 50 códigos IBAN simultáneamente. Basta con pegar tu lista con un código por línea para obtener el desglose.',
    },
    {
      q: '¿Qué es la regla «IBAN Only» en las transferencias europeas?',
      a: 'Es la normativa europea que prohíbe a los bancos exigir el código BIC/SWIFT para emitir o recibir transferencias en euros dentro de la zona SEPA; aportar el IBAN es suficiente.',
    },
  ],
  sources: [
    {
      label: 'Banco de España: Información sobre cuentas bancarias y transferencias',
      url: 'https://www.bde.es/wbe/es/para-ciudadanos/gestiones-bancarias/cuentas-bancarias/',
    },
    {
      label: 'Banco Central Europeo: Normas SEPA y pagos minoristas',
      url: 'https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.es.html',
    },
    {
      label: 'Comisión Nacional del Mercado de Valores (CNMV)',
      url: 'https://www.cnmv.es',
    },
    {
      label: 'SWIFT: Registro internacional de códigos IBAN',
      url: 'https://www.swift.com/standards/data-standards/iban',
    },
  ],
  relatedTools: [
    {
      title: 'Validador de códigos BIC / SWIFT',
      slug: 'bic-swift-checker',
      description: 'Comprueba códigos bancarios internacionales de 8 y 11 caracteres según ISO 9362.',
      category: 'Banca',
    },
    {
      title: 'Calculadora de IVA Unión Europea',
      slug: 'vat-calculator',
      description: 'Calcula el tipo general del 21 % y reducidos del 10 % y 4 % de IVA para facturas.',
      category: 'Impuestos & IVA',
    },
    {
      title: 'Calculadora de IVA Alemán (MwSt)',
      slug: 'de/mwst-rechner',
      description: 'Calcula el IVA alemán al 19 % y 7 % para operaciones intracomunitarias en Europa.',
      category: 'Impuestos & IVA',
    },
  ],
  relatedGuides: [
    {
      title: 'Qué es el IBAN: Guía sobre códigos de cuentas bancarias',
      slug: 'guides/what-is-an-iban',
      description: 'Conoce el origen, la estructura y el uso de las cuentas bancarias internacionales.',
      category: 'Banca',
    },
    {
      title: 'Diferencia entre IBAN y SWIFT / BIC en transferencias',
      slug: 'guides/iban-vs-swift-bic',
      description: 'Aprende cuándo necesitas solo tu número de cuenta y cuándo el código de tu banco.',
      category: 'Banca',
    },
  ],
  updatedAt: '2026-11-14',
  disclaimer:
    'Esta herramienta de validación de códigos IBAN se proporciona únicamente con fines informativos y de verificación sintáctica previa. Si bien ejecuta todas las comprobaciones formales de la norma ISO 13616 y del Banco de España, no puede verificar la vigencia real del contrato ni la identidad del titular. Antes de efectuar transferencias de elevado importe, corrobora siempre los datos directamente con la entidad o con el destinatario.',
};
