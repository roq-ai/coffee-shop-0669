interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Manager', 'Business Owner', 'Customer'],
  tenantName: 'Company',
  applicationName: 'coffee shop',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read product information', 'Place orders', 'View order status', 'Update personal information'],
  ownerAbilities: ['Manage user information', 'Manage company details', 'Manage product listings', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/519e3274-5137-4061-b379-87d8427d68c1',
};
