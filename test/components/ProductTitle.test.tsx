import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components'
import { product1 } from '../data/products';


describe('tests in ProductTitle component', () => {
    
    test('should render ProductTitle component with the custom title', () => {
        const wrapper = renderer.create(<ProductTitle title="Custom Product" />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    }
    );

    test('should show the title as product name if title is not defined', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    
})
