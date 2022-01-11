import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components'
import { product2 } from '../data/products';


describe('tests in ProductImage component', () => {
    
    test('should render ProductTitle component with the custom title', () => {
        const wrapper = renderer.create(<ProductImage img='./test.jpg' />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    }
    );

    test('should show the image path', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage img={product2.img} style={{ backgroundColor: 'black'}} />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    
});

