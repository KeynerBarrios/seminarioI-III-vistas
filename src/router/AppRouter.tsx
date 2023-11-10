import {Routes,Route} from 'react-router-dom';
import Homeadmi from '../components/pages/home-admi/Homeadmi';
import Menumanagement from '../components/pages/menumanagement/Menumanagement';
import Tablemanagement from '../components/pages/tablemanagement/tablemanagement';
import Settingofdata from '../components/pages/settingofdata/Settingofdata';
import Ordertable from '../components/pages/ordertable/Ordertable';
import Addtable from '../components/pages/addtable/Addtable';
import Edittable from '../components/pages/edittable/Edittable';
import Orderstable from '../components/pages/orderstable/Orderstable';
import Sauceradd from '../components/pages/sauceradd/Sauceradd';


export const AppRouter = () =>{
    return(
        <Routes>
            <Route path='/' element={<Homeadmi/>}/>
            <Route path='/homeadmi' element={<Homeadmi/>}/>
            <Route path='/menumanagement' element={<Menumanagement/>}/>
            <Route path='/tablemanagement' element={<Tablemanagement/>}/>
            <Route path='/ordertable' element={<Ordertable/>}/>
            <Route path='/settingofdata' element={<Settingofdata/>}/>       
            <Route path='/tablemanagement/addtable' element={<Addtable/>}/>     
            <Route path='/tablemanagement/edittable' element={<Edittable/>}/>     
            <Route path='/ordertable/orderstable' element={<Orderstable/>}/>     
            <Route path='/sauceradd' element={<Sauceradd/>}/>     

        </Routes>
    )
}