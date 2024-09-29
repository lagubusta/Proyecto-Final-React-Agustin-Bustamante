# Proyecto final
El proyecto final constiste en crear una tienda online, donde haya una lista de productos y también sus categorias. Este se van
a poder agregar al carrito de compras y también eliminarse. Una vez finalizada la compra se agrega esa orden de venta a la base de datos.

### Video
https://www.youtube.com/watch?v=Rgb3RnFHWv4

## App.jsx
Detalle de lo que contiene el archivo.
### Import
- *importa App.css*: para dar estilo.
- *BrowserRouter, Routes, y Route from 'react-router-dom'*: esto permite establecer rutas dentro de nuestra aplicación.
- Importamos de sus respectivas ubicaciones los componentes NavBar, ItemListContainer, ItemDetailContainer, Footer, Cart.
- Importa el ``{CartProvider}`` para permitir la comunicación entre los componentes.

### Funcion App()
- ``<BrowserRouter>`` para poder mostrar diferentes componentes de la aplicación dependiendo del la UIRL.
- ``<CartProvider>`` envuelve a los componentes hijos, permitirá acceder a sus funciones desde cualquier parte de la aplicación.
-  ``<NavBar>`` componente que representa a la barra de navegación, contiene los enleces a las diferentes rutas.
-  ``<Routes>`` componente de React Router que define los caminos de la aplicación. Este contiene diferentes ``<Route>`` que define que componente de debe renderizacar en cada URL. Incluye una ruta que se va a mostrar cuando el URL no coincida con ninguna de las establecidas.


## Index.js
### Import
- Importa estilo css.
- Importa la biblioteca de *React* para poder trabajar con los componentes y JSX.
- Importa *ReactDOM* para poder manejar el rederizado.
- Importa el componente princial **App**.

Se crea la ``const root`` para crear la raiz en DOM donde se va a renderizar toda la aplicación.
``<React.StrictMode>`` componente que ayuda a detectar problemas potenciales. Este envuelve a la aplicación.

## Componente NavBar.jsx
Importa estilo, otros componentes de sus respectivas ubicaciones. También importamos que estan dentro de *react-router-dom*: **Link y NavLink**. El primero se usa para crear enlaces y que no se recargue la página. El segundo es similar solo que permite aplicar estilo de manera mas rapida para "detectar" en que página esta.

- Este componente es el que va a representar a la barra de navegación de la aplicación con su *className*.
- Tiene un ``link`` el cual tiene dentro un ``h3`` que nos redirige al home.
- Tiene un ``div`` que dentro tiene los ``NavLink`` que en este caso nos va a redirigir a cada una de las *category*.
    - ``<NavLink to= {`/category/smartphone`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Smartphone</NavLink>``
    - ``to= {`/category/smartphone`}`` en esta parte le indicamos que se "agregue" a la url *../category/smartphone*.
    - La prop **className** recibe una función para verificar que la ruta actual es la activa (isActive), en tal caso aplica la clase **AtiveOption** y sino la clase **Option**.
- Exporta el componente para poder ser usador en otros componentes o en la App.jsx.

## Componente Item.jsx
Importa el estilo, NavLink, Link

- ``const Item = ({id, name, img, price, stock}) => {``
    - Componente que recibe props, en este caso son los detalles del producto.
- Este componente va a retornar:
  - **Article:** Va a representar una "tarjeta" para el item, o depende como se use para cada uno de los productos. Y dentro de sí va a tener diferentes etiquetas.
    - ``<h2>`` va a llamar el ``{name}`` del item o producto.
    - ``picture`` que va a tener dentro una ``img``, que va a mostrar la imagen del producto ``{img}``, esta se va a determinar en la base de firebase (se explica mas adelante).
    - ``<section>`` que va a contener el ``{price}`` y ``{stock}``
  - Por ultimo va a tener un ``<footer>`` que va a conenter a un ``<Link>`` que va llevar a una vista detallada del producto seleccionado usando la prop **id** para generar dinámicamente la url (/item/${id})
    - ``<Link to = {`/item/${id}`} className="Option2"> Ver detalle</Link>``

## Componente ItemCount
Importamos todo lo necesario de las ubicaciones correspondientes. Se usa **{ useState }** que es el **hook** para gestionar los estados. Por ejemplo en este caso se usa para manjera la cantidad de items seleccionados.

- ``const ItemCount = ({ stock, initial, onAdd }) => { ... }:``
  - Componente que recibe tres pops, el **stock**, **initial** es como arranca el estado y **OnAdd** que es una funcion que se ejecuta al hacer click.
- ``const [quantity, setQuantity] = useState(initial);``
  - Hook de estado que define la variable *quatity*, que es la cantidad seleccionada, y la funcion *setQuatity* para actualizarla.
  - Empiza con el valor de la prop **initial**.
-  ``const increment = () => {if (quantity < stock) {setQuantity(quantity + 1)}}``
   -  Esta función, va a ingrementar la cantidad seleccionada, siempre que la cantidad sea menor al stock disponible. Tiene la función **decrement** similar para restar.
- Tiene un ``<div>`` contenedor, dentro tiene otro que contiene los ``<botones>`` que con el **onClick** incrementa o resta la cantidad segun corresponda. Y un ``h4`` que muesta la cantidad actual y se va acutalizando dinámicamente.
- Tiene otro ``<div>`` contenedor en el cual hay un ``<button className="Button" onClick={()=> onAdd(quantity)} disabled={!stock} > Agregar al carrito</button>``. El **onClick** de este, va a ejectura la función **onAdd** pasando la **quatity** como argumento.
  - El **disabled={!stock}** hace que el botón este desabilitado si no tiene stock, haciendo que no se pueda agregar al carrito.

## Componente ItemDetail.jsx
Importamos todo lo necesario de las ubicaciones correspondientes. Ademas importamos el **hook useState** para gestionar el estado del componente y **usdConetex** para acceder al contexto global del carrito **CartContext**
- ``const ItemDetail = ({ id, name, img, category, price, stock, description }) => {``
  - Es un componente funcional que recibe props de un producto individual, este se usa para ver el detalle del mismo y da la posibilidad de agregarlo al carrito.
- ``const [quantityAdded, setQuatityAdded] = useState(0)``
  - Se usa el **hook useState** para almacenar las unidades del producto que se agregaron al carrito.
  - **quantityAdded** empiza en 0, por lo que no se agregó ninguna unidad del prodcuto.
- ``const { addItem } = useContext(CartContext);``
  - Accedemos a la funcion ``{ addItem }`` del **CartContext** para que nos permita agregar productos al carro.
  - **useContext(CartContext)** permite que la función **addItem** esté disponible dentro del componente sin tener que pasarla por las props.
- ``const handleOnAdd = (quantity) => {``
  - Función que se ejecuta cuando se hace click en el botón.
  - **setQuantityAdded(quantity)** actualiza el estado **quantityAdded** con la cantidad de productos seleccionada.
  - Se crea un objeto **item** que contiene los detalles del producto, y se llama a **addItem(item, quantity)** pasando el prodcuto y la cantidad al carrito de compras.
- Retorna un ``<main>`` que contiene varias etiquetes ya explicadas antes. Lo que es distinto es el ``<footer>``. En este se muestra un botón o enlace dependiendo si el usuario ya agrego productos al carrito.
  - Si **quatityAdded** es mayor a 0, se muestra el **link** para ir a terminar la compras. Sino se renderiza ``<ItemCount>`` para seleccionar la cantidad de productos. Se pasan las props ``initial= {1}``, ``stock= {stock}`` y ``onAdd={handleOnAdd}``.


## Componente ItemDetailContainer.jsx
- Importamos todo lo necesario de las ubicaciones correspondientes.
  - Ademas importamos **useEffect** que permite ejecutar la obtención de datos.
  - Importamos **useParams** que permite acceder a los parámetros de la URL, en este caso para obtener el **itemId**.
  - Importamos el ``{db}`` que tiene la configuración de la base de datos, que se configuro en el archivo correspondiente.
- ``const [product, setProduct] = useState(null);``
  - Declaramos una veriable de estado **product** la cual almacena lo datos del mismo. El estado inicial es **null** para mostrar que no se cargaron datos.
- ``const [loading, setLoading] = useState(true);``
  - Se declara **loading** que controla el estado de carga, el **true** significa que el componente se esta cargado cuando arranga.
- ``const { itemId } = useParams();``
  - Obtenemos el parámetro itemId desde la URL, que es fundamental para poder buscarlo en la base de datos.
- ``useEffect(() => {...}, [itemId]``
  - Se ejecuta cuando se monta y cuando el valor de **itemId** cambia. Es quien hace la solicitud a firebase para traer los datos.
  - ``setLoading(true)``
    - Se vuelve a llamar para indicar que esta cargando.
  - ``const docRef = doc(db, 'products', itemId)``
    - Hacemos una referencia al **doc** para que busque dentro de la colección **products** el **itemId** que obtuvimos de la URL.
  - ``getDoc(docRef)``
    - Obtenemos los datos que se encontraron en la base de datos.
    - ``.then(response => {...}``
      - Cuando ``getDoc`` se resuelve, se ejecuta lo siguiente:
        - ``const data = response.data()`` obtiene los datos del documento como **data**.
        - ``const productAdapted = {id: response.id, ...data}`` tenemos un nuevo objeto con los datos del producto y el **id** del **doc**
        - ``setProduct(productAdapted)`` actualiza el estdo del **prodcut** con el objeto.
    - ``.catch(error => {console.log(error)})`` en caso de error muestra el mensaje.
    - ``.finally(() => { setLoading(false); })`` sea cual sea el resultado, va a mostrar que la carga termino.
- Todo esto va a retornar un ``<div>`` que, si **loading** es **true**, va a mostrar un ``<p>`` diciendo que esta cargando y si **loading** es **false** y hay un producto cargado en el estado, se renderiza el componente **ItemDetail** pasando todas las propiedades del producto usando ``{...product}.``

## Componente ItemList.jsx
- Importamos el estlo y el componente **Item**.
- ``const ItemList = ({ products }) => { ... }``
  - El componente recibe una prop, que es un array de objetos que tiene los datos de los productos.
- Retorna un ``<div>`` contenedor.
  - ``{products.map(prod => <Item key = {prod.id} {...prod} />)}``
    - Mapeamos el array de la base de datos por cada producto.
    - Renderizamos el componente ``<Item>``.
    - Le asignamos que la **key** sea igual al id del producto.
    - Le pasamos todas las propiedades del objeto **prod** al componente **Item**.

## Componente ItemListContainer.jsx
- Importamos todo lo necesario de las ubicaciones correspondientes.
- Importamos de **Firebase**:
  - **getDocs**: para poder acceder a los documentos.
  - **collection**: para poder tener las referecias de las colecciones.
  - **query** y **where**: para crear consultas con condiciones.
  - **doc**: para hacer referencia a un documento especifico.
- ``const ItemListContainer = ({ greeting }) => {...}``
  - Define el componente.
- ``const [products, setProducts] = useState([])``
  - productos va a almacenar el array de productos obtenidos de la base de datos y **setProducts** actualiza el estado.
- ``const [loading, setLoading] = useState(true)``
  - **loading** indica si la aplicación esta en proceso de cargado y **setLoading** actualiza el estado.
- ``const { categoryId } = useParams()``
  - Usamos **useParams** para obtener el el categryId de la URL, y si por ejemplo esta tiene */categry/smartphone*, el **categoryId** sería **smartphone** y nos va a permitir hacer el filtro.
- ``useEffect(() => {...}``
  - Se ejecuta cada vez que el componente se llama y cada vez que cambia categoryId.
  - ``setLoading(true);``
    - Indica que los productos se estan cargando.
  - ``const collectionRef = categoryId``
    - Es la referencia a la colección en la base de datos.
    - ``? query(collection(db, 'products'), where('category', '==', categoryId))``
    - Creamos una consulta **query** que va a filtrar los productos de la base de datos donde la **category** sea igual al **categroyId**.
    - ``: collection(db, 'products')`` sino existe ``categoryId`` va a mostrar la lista completa de productos.
  - ``getDocs(collectionRef)``
    - Para obtener los documentos y las colecciones de la base de datos.
    - ``.then(response => { ... })``
      - Si la llamada se compli se mapea cada doc para extraer la información y se crea un nuevo objeto con el **id** del doc y todo lo que contiene. Si se almacena en **prodcutsAdapted**.
      - ``setProducts(productsAdapted)`` actualiza el estado de Products.
    - ``.catch(error => {console.log(error)})`` si hay algun error lo muestra.
    - ``.finally(() => {setLoading(false)})``se cambia el estado para indicar que la carga termino.
- Se renderiza t ``<ItemList>`` dentro de un div.

## Componente Cart.jsx
- Importamos las cosas necesarias de sus ubicaciones correspondientes.
- ``const Cart =  () => {...}``
  - Se define el componente que va a renderizar el carrito.
  - ``const {cart, clearCart, totalQuantity, total} = useContext(CartContext)``
    - Usamos el **useContext** para traer los valores desde **CartContext**.
      - Cart: El *Array* que contiene los productos añadidos al carrito.
      - clearCart: función que permite vaciar el carrito.
      - totalQuatity: suma de las cantidades de todos los productos.
      - total: suma el total.
  - ``if(totalQuantity === 0 ) {...}``
    - Se verigica que **totalQuatity** es 0, es ese caso va a retornar un mensaje diciendo que el carrito esta vacio.
    - Y si **totalQuatity** es mayor a 0, va a renderizar un ``<div>`` que:
      - ``{cart.map(p => <CartItem key={p.id} {...p}/>)}``
        - Usamos *map* para reccorer cada producto dentro del array **cart**.
        - Se define **key** como el **id** del productos para actualizar cada item de la lista.
        - Por cada producto se va a crear un ``<CartItem>`` pasando las propiedades de cada uno.
      - Muestra el ``{total}`` dentro de un ``<h3>``
      - Agregamos un ``<button>`` que al hacer click ejecuta **clearCart**, para vaciar el carrito.

# Componente CartItem
- Importamos las cosas necesarias de sus ubicaciones correspondientes.
- ``const CartItem = ({ id, name, img, price, stock }) => {---}``
  - Recibe las props id, name, img, price, stock, son las características de cada producto dentro del carrito.
- ``useContext(CartContext)``
  - Para extraer las propiedades del contexto del carrito.
- ``cart.find(item => item.id === id);``
  - Busca dentro del **cart** el producto que coincida el **id** de las props.
  - La función **find** busca y devuelve el primer elemento encontrado y lo guarda en la la constante **item**.
- Muestra como va a ser el renderizado.

## Componente CartWidget.jsx
- Importamos las cosas necesarias de sus ubicaciones correspondientes.
- ``const CartWidget = () => { ... }``
  - Define el componente que muestra el carrito de compras como img.
    - ``const { totalQuantity } = useContext(CartContext)``
      - Usamos el **hook** para extraer el **total quatity** del **CartContext**.
      - 
## Componente Footer.jsx
- Importamos el estilo css.
- Definimos el componente que contiene un ``<div>`` con un ``<h4>``.

## Componente Err
- Importamos las cosas que son necesarias.
- Va a retornar un ``<div>`` que muestra un ``<h3>`` y ``<button>`` para volver a la tienda.

## Componente Checkout
- ``const [...,...] = useState(...);``
  - Importamos las cosas que son necesarias.
  - ``loading``: Indica si la orden se esta generando.
  - ``orderId``: Guarda el ID de la orden generada en la **db**.
  - ``name, phone, email``: Almacena lo ingresado por el usuario.
  - ``eerorMessage``: Se muestra en caso de error.
- ``const { cart, totalPrice, clearCart } = useContext(CartContext);``
  - Extrae los elementos **cart, totalPrice, clearCart** del ``<CartContext>``.
- ``const handleCreateOrder = async (e) => {...}``
  - Es importante que sea **async** por que es la conexión con la base de datos y a veces demora.
  - Es el evento que se dispara al enviar el formulario.
- ``e.preventDefault();``
  - Evita que se recager al enviar el formulario.
- ``if (cart.length === 0) {...}``
  - Verifica que el carrito es vacio, si esto es **true** va a mostrar el estadio **ErrorMessage**. Ejecuta return hasta que la condición se cumpla.
  -``setLoading(true);``
    - Cambia el estado a **true**, para mostrar que se esta generando la orden..
- ``<try>``
  - para ejecutar código que podría fallar.
  - ``const order = {...}``
    - La orden a ser guardad, tiene como props:
      - buyer, name, phone, email, items, total data.
  - ``const docRef = await addDoc(collection(db, "orders"), order);``
  - **addDoc** s la función que permite agregar nuevo doc a la colección en la db.
    - ``collection(db,"orders") ``: otiene una referencia dentro de la db.
  - ``await``: Espera y retorna una referencia al nuevo doc creado.
  - ``setOrderId(docRef.id);``
    - El ID de la orden se guarda en OrderId para que el usuario lo vea.
  - ``clearCart();`` Limpia el carrito una vez finalizado.
  - ``catch (error) {..} ``
    - Muestra un error en caso que pase.
  - ``finally {setLoading(false);}``
    - Permite que se actulice.
- Esto se va a renderizar con un ``<h2>``
- Un ``<form>`` para que el usuario complete, en caso que esten vacios no van a poder finalizar la compra.
- En caso qeu el carrito este vacio va a mostrar el mensaje qeu error

## Componente OrderHistory
- Importamos las cosas que son necesarias.
- ``const OrderHistory = () => {``
  - Administra el historial de compras del usuario.
- ``const [orders, setOrders] = useState([]);`
  - Declara los diferentes estados. **orders, loading, visibleOrders**-
- `useEffect(() => {`
  - Para ejecutar **fetchOrders**.
  - ``fetchOrders`` se encarga de obtener las ordenes desde la db.
  - `setLoading(true)`
    - Activa el estado de cargar.
- `const querySnapshot = await getDocs(collection(db, 'orders'))`:
  - Obtiene informacion de la colección en Firestore.
- ``const fetchedOrders = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))``
  - Mapea cada documento.
-``setOrders(fetchedOrders)``
  - Actualiza su estado.
- ``catch (error)``
  - Captura cualquier error en la obtención de las órdenes y lo imprime
- ``finally { setLoading(false) }``
  - Finaliza el estado de carga.
- ``const toggleOrderVisibility = (orderId) => {``
  - Función que alterna la vista de los detalles en cada orden.
  - `setVisibleOrders((prevVisibleOrders) =>`
    - Actualiza ele stado.
- El componente se va a rederizar de esta manera.
  - Va a contener el historial
  - Si no hay compras realziadas va a mostrar un mensaje.
  - En caso que este bien va a mostrar el resto del detalle de las ventas.
