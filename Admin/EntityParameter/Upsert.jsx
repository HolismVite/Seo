import { useState, useEffect } from 'react'
import { PageForm, Progress, app, get, useMessage } from '@Form'
import Inputs from '../ParameterObject/Inputs'

const UpsertEntityParameter = () => {

    const { entityType, entityGuid } = app.parseQuery()
    const [entity, setEntity] = useState(null)
    const [progress, setProgress] = useState(true)
    const { success, error } = useMessage()

    useEffect(() => {
        if (entityType && entityGuid) {
            setProgress(true)
            get(`/entityParameter/getRecord?entityType=${entityType}&entityGuid=${entityGuid}`)
                .then(data => {
                    // app.emit(app.editRequested, { entity: data })
                    setEntity(data)
                }, e => {
                    setProgress(false)
                    error(e)
                })
        }
    }, [])

    useEffect(() => {
        if (entity) {
            setProgress(false)
        }
    }, [entity])

    return progress ? <Progress /> : <PageForm
        entityType='EntityParameter'
        entity={entity}
        inputs={Inputs}
    />
}

export default UpsertEntityParameter