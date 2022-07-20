const ListaDepartamentos = () => {

    return (
        <>
        <h3 className='mt-3'>Listagem de Departamentos</h3>

        <table className='table table-striped'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sigla</th>
            <th className='text-center'>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Recursos Humanos</td>
            <td>RH</td>
            <td>

                <div className='d-flex justify-content-evenly'>
            <button className='btn btn-warning'>
                <i className='bi bi-pencil-fill'/> Editar
                </button>
              <button className='btn btn-danger'>
                <i className='bi bi-trash3-fill'/> Excluir
              </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </>
    )
}



export default ListaDepartamentos;