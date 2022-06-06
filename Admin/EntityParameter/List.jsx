import { List } from '@List'
import UpsertEntityParameter from './Upsert'

const card = (item) => <>
    <div>{item.pageTitle}</div>
    <div>{item.metaTitle}</div>
    <div>{item.metaDescription}</div>
</>

const EntityParameters = () => {
    return <List
        title='SEO Entity Parameters'
        entityType='EntityParameter'
        card={card}
        hasEdit={true}
        hasDelete={true}
        upsert={UpsertEntityParameter}
    />
}

export default EntityParameters