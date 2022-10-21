import './styles.scss';
import { isMobile } from '../../../helpers/Mobile';

const ItemList = ({title, subtitle}) => {
return <div className="item-list"><h5 className='title'>{title}</h5>
<p>{subtitle}</p></div>

}
    export default ItemList;