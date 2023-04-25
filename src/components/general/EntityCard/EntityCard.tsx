import { EntryCard } from '@contentful/f36-components';
import { styles } from './EntityCard.styles';
import Placeholder from './assets/placeholder.png';
import { Entity, ListCard } from '../Entity.types';

export interface Props extends Entity, ListCard { }

const isMissingData = (title?: string): boolean => {
    return !title;
}

const EntityCard = (props: Props) => {
    const { title, loading, entityType, thumbnail, className } = props;
    const card = isMissingData(title) ?
        <EntryCard
            status='deleted'
            title={`${entityType} Missing`}
            description={`This ${entityType} is missing. It may have been deleted or moved.`}
            isLoading={loading}
            role='article'
            data-test-id="missing" />
        :
        <EntryCard
            {...props}
            isLoading={loading}
            thumbnailElement={<img alt="Thumbnail" src={thumbnail || Placeholder} />}
            role='article'
        />

    return (
        <div className={`${styles.root} ${className}`} data-test-id="entity-card-single">
            {card}
        </div>
    );
}

export default EntityCard;
