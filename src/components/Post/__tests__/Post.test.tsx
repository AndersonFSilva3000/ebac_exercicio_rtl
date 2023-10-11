import { render, screen } from "@testing-library/react";
import Post from "..";

describe('Testando o post', () => {
  test('Deve renderizar a img e o teste', () => {
    render(
      <Post imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg">
        Teste
      </Post>
    )
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })
})