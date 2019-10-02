import React from 'react';
import { Segment, List, Button } from 'semantic-ui-react';

const Legend = () => {
  return (
    <>
      <Segment className="legend__title" vertical>
        Legend
      </Segment>
      <List>
        <List.Item>
          <span className="legend__icon legend__icon--transparent" />
          <List.Content>Свободное время</List.Content>
        </List.Item>
        <List.Item>
          <span className="legend__icon legend__icon--lightgreen" />
          <List.Content>Выделено для текущей организации</List.Content>
        </List.Item>
        <List.Item>
          <span className="legend__icon legend__icon--green" name="circle outline" />
          <List.Content>Выделено для другой организации</List.Content>
        </List.Item>
        <List.Item>
          <span className="legend__icon legend__icon--lightblue" name="circle outline" />
          <List.Content>Выделено вами</List.Content>
        </List.Item>
        <List.Item>
          <span className="legend__icon legend__icon--blue" name="circle outline" />
          <List.Content>Выделено менеджером</List.Content>
        </List.Item>
        <List.Item>
          <span className="legend__icon legend__icon--yellow" name="circle outline" />
          <List.Content>Перерыв (нерабочее время)</List.Content>
        </List.Item>
      </List>
      <Button className="legend__button">Add new Event</Button>
    </>
  );
};

export default Legend;
