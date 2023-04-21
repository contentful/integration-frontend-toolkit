import { Caption, EntityList, Flex, Form } from '@contentful/f36-components';
import { styles } from './EntityForm.styles';
import SearchBar from 'components/stacks/common/SearchBar/SearchBar';
import EntityCardList from '../EntityCardList/EntityCardList';
import { Entity } from '../Entity.types';
import { useEffect, useState } from 'react';
import { SearchParams } from 'components/stacks/common/SearchBar/SearchBar.types';


export interface Props<T> {
    entityType: string;
    list: T[];
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}


const EntityForm = <T extends Entity>(props: Props<T>) => {
    const { entityType, list, onSubmit } = props;
    const [searchableList, setSearchableList] = useState(list)

    const onSearch = (searchQuery: SearchParams) => {
        console.log(searchQuery.searchValue)
        const newList = searchQuery.searchValue ? searchableList.filter((entity: Entity) => {
            return entity.title.toLowerCase().includes(searchQuery.searchValue.toLowerCase());
        }) : list

        setSearchableList(newList)
    }

    return (
        <div className={styles.root} id='EntityForm' >
            <Form onSubmit={onSubmit}>
                <Caption>Search for a {entityType}</Caption>
                <SearchBar
                    onSearch={onSearch}
                    placeholder={`Type to search for ${entityType}s`}
                    searchTitle={`Search for ${entityType}s`} />

                <Flex>
                    <EntityCardList entityType={entityType} list={searchableList} />
                </Flex>
            </Form>
        </div>);
}

export default EntityForm;