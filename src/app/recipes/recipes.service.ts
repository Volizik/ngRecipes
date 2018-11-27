import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {Injectable} from "@angular/core";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {

    private recipes: Recipe[] = [
        new Recipe(
            'Pancakes',
            'French pancakes with meat',
            'http://www.thepersianpot.com/wp-content/uploads/IMG-20150307-WA00111.jpg',
            [
                new Ingredient('Meat', 3),
                new Ingredient('Meal', 2),
                new Ingredient('Water', 1),
                new Ingredient('Eggs', 2),
            ]
        ),
        new Recipe(
            'Burger',
            'American burger',
            'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bun', 1),
                new Ingredient('Cheese', 1),
                new Ingredient('Sauce', 1),
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }
}