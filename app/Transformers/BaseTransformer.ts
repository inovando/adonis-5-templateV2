import { TransformerAbstract } from '@ioc:Adonis/Addons/Bumblebee'
export default class BaseTransformer extends TransformerAbstract {
  public transform(model: any) {
    console.log(model)
    return {
      id: model.id,
      status: model.status,
      createdAt: model.createdAt,
    }
  }
}
