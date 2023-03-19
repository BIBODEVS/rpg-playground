import { FC } from "react";
import { ModalData } from "../../app/stores/modals";
import { observer } from "mobx-react-lite";
import { useStores } from "../../shared/hooks/stores";
import { Button, Form, Input, Space } from "antd";
import { Typography } from "antd";

const { Title, Text } = Typography;

export type InitiativeProps = {};
export const Initiative: FC<ModalData<InitiativeProps>> = observer(() => {
  const {
    playground: { characters },
  } = useStores();
  return (
    <Space direction="vertical">
      <Title level={3}>Определите инициативу</Title>
      <Form>
        {characters.map((character) => (
          <Form.Item
            name={character.id}
            rules={[{ required: true, message: "Заполните инициативу" }]}
          >
            <Space>
              <Text strong>{character.name}</Text>
              <Input />
            </Space>
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
});
