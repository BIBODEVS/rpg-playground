import { FC } from "react";
import { Card } from "antd";
import { HealthMark } from "../HealthMark";

type UserCardProps = {
  name: string;
  health?: number;
  maxHealth?: number;
};

export const EntityCard: FC<UserCardProps> = ({ name, health, maxHealth }) => {
  return (
    <Card title={name} style={{ width: 300 }}>
      {health && maxHealth && (
        <HealthMark value={health} maxValue={maxHealth} />
      )}
    </Card>
  );
};
