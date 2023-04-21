import { Caption, EntityList, Flex, Form } from '@contentful/f36-components';
import { styles } from './EntityForm.styles';
import SearchBar from 'components/stacks/common/SearchBar/SearchBar';
import EntityCardList from '../EntityCardList/EntityCardList';
import { Entity } from '../Entity.types';


export interface Props<T> {
    entityType: string;
    list: T[];
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}


const EntityForm = <T extends Entity>(props: Props<T>) => {
    const { entityType, onSubmit } = props;
    debugger;
    return (
        <div className={styles.root} id='EntityForm' >
            <Form onSubmit={onSubmit}>
                <Caption>Search for a {entityType}</Caption>
                <SearchBar onSearch={() => { console.log('searched') }} />

                <Flex>
                    <EntityCardList {...props} />
                </Flex>
            </Form>
        </div>);
}

export default EntityForm;