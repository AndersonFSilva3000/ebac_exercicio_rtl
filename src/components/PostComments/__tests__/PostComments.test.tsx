import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Adicionar dois comentarios', () => {
        render(<PostComment />)
 
        fireEvent.change(screen.getByTestId('textarea') , {
            target: {
                value: 'Comentario 0.1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('textarea') , {
            target: {
                value: 'Comentario 0.2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        
        expect(screen.getAllByTestId('todos-os-comentarios')).toHaveLength(2)
    })
})