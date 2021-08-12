import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { User } from "../../sdk/@types";
import UserService from "../../sdk/services/User.service";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {
  const [user, setUser] = useState<User.Detailed>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    UserService.getDetailedUser(7)
      .then(setUser)
      .catch(error => setError(new Error(error.message)));
  }, []);

  if (error)
    throw error;

  if (!user)
    return <UserEarningsWrapper style={{ height: 123 }}>
      <Skeleton height={40} width={150} />
      <Skeleton height={40} width={150} />
      <Skeleton height={40} width={150} />
      <Skeleton height={40} width={150} />
    </UserEarningsWrapper>;

  return <UserEarningsWrapper>
    <ValueDescriptor description={'ganhos no mês'} value={user.metrics.monthlyEarnings} color={'default'} isCurrency />
    <ValueDescriptor description={'ganhos na semana'} value={user.metrics.weeklyEarnings} color={'default'} isCurrency />
    <ValueDescriptor description={'ganhos de sempre'} value={user.metrics.lifetimeEarnings} color={'primary'} isCurrency />
    <ValueDescriptor description={'total de palavras'} value={user.metrics.lifetimeWords} color={'primary'} />
  </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
