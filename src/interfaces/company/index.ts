import { ManagerInterface } from 'interfaces/manager';
import { OrderInterface } from 'interfaces/order';
import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  manager?: ManagerInterface[];
  order?: OrderInterface[];
  product?: ProductInterface[];
  user?: UserInterface;
  _count?: {
    manager?: number;
    order?: number;
    product?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
