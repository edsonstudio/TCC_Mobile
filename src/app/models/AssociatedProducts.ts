import { v4 as Guid } from 'uuid';

export class AssociatedProducts {
    productFather: typeof Guid;
    productSon: typeof Guid;
}
