import '../pages/dashboard.css'
import Table from 'react-bootstrap/Table'
import { FaListUl } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function TableCategories(){
    return (
        <div>
            <Table >
                <tbody className='tableCategorias'>
                    <tr>
                        <td>BAÑOS</td>
                        <td><Link className='aTableCategorias' to='/dashboard/categorie/Baño'><FaListUl /></Link></td>
                    </tr>
                    <tr>
                        <td>CARPINTERIA</td>
                        <td><Link className='aTableCategorias' to='/dashboard/categorie/Carpintería'><FaListUl /></Link></td>
                    </tr>
                    <tr>
                        <td>COCINA</td>
                        <td><Link className='aTableCategorias' to='/dashboard/categorie/Cocina'><FaListUl /></Link></td>
                    </tr>
                    <tr>
                        <td>PINTURA</td>
                        <td><Link className='aTableCategorias' to='/dashboard/categorie/Pintura'><FaListUl /></Link></td>
                    </tr>
                    <tr>
                        <td>PISOS</td>
                        <td><Link className='aTableCategorias' to='/dashboard/categorie/Piso'><FaListUl /></Link></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TableCategories;