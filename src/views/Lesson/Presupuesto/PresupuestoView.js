
import ItemList from 'components/atoms/ItemList';
import MainLayout from 'components/organisms/MainLayout';

import './styles.scss';

const Presupuesto = (props) => {
    // const {
    //     beforeSubmit, afterSubmit,
    //     dealWithError
    // } = useRequest();
    
    // const [friendships, setFriendships] = useState();
    // const [hasMore, setHasMore] = useState(true);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [lastPage, setLastPage] = useState(1);

    // useEffect(() => {
    //     beforeSubmit();
    //     FriendshipService.friendships(currentPage).then(data => {
    //         console.log(data.data);
    //         setCurrentPage(data.current_page);
    //         setLastPage(data.last_page);
    //         setCurrentPage(currentPage + 1);
    //         console.log(data.data.map(i => new Friendship(i)));
    //         setFriendships(data.data.map(i => new Friendship(i)));
    //         afterSubmit();
    //     }).catch((error) => {
    //         afterSubmit();
    //         dealWithError(error, '');
    //     });
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // const fetchMoreData = () => {
    //     setTimeout(() => {
    //         if (currentPage > lastPage) {
    //             setHasMore(false);
    //             return;
    //         }
    //     }, 1500);

    //     setCurrentPage(currentPage + 1);

    //     setTimeout(() => {
    //         beforeSubmit();
    //         FriendshipService.friendships(currentPage, 5).then(data => {
    //             console.log(data.data);

    //             setFriendships(friendships.concat(data.data.map(i => new Friendship(i))));
    //             afterSubmit();
    //         }).catch((error) => {
    //             afterSubmit();
    //             dealWithError(error, '');
    //         });
    //     }, 1500);
    // };

    //return <List title={"Presupuesto"} elements={friendships} hasMore={hasMore} fetchMoreData={fetchMoreData}></List>

    return <MainLayout>
        <h3>Presupuesto</h3>
        <ItemList title={"Nuevo Ejercicio"} subtitle={"Generar el nuevo Ejercicio fiscal para formular el Presupuesto."}></ItemList>
        <ItemList title={"Anteproyecto"} subtitle={"Administrar la información de Anteproyectos."}></ItemList>
        <ItemList title={"Clasificadores Primarios"} subtitle={"Administrar la información de los clasificadores primarios."}></ItemList>

    </MainLayout>;
}

export default (Presupuesto);