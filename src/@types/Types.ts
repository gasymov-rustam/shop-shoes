import { TSneaker } from '../redux/sneakers/Sneakers.types';

export type TTitle = {
  title: string;
};

export type TDataIdType = {
  id: number;
};

export interface IFavoritesInitialState {
  favItems: TSneaker[];
}

export interface IOrdersInitialState {
  orders: TSneaker[];
}
