import { List } from '@List'

const headers = <>
    <th>Title</th>
</>

const row = (item) => <>
    <td>{item.title}</td>
</>

const Snippets = () => {
    return <List
        title="Snippets"
        entityType="Snippet"
        headers={headers}
        row={row}
    />
}

export default Snippets