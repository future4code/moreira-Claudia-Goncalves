import React from 'react'
import { FilterContainer } from "../../style";

export function Filtros(props) {
  return (
    <FilterContainer>
      <input placeholder="pesquisa"
        value={props.busca}
        onChange={props.onChangeAtualizarPesquisa}
      />

      <input placeholder="preço mínimo"
        type="number"
        value={props.precoMinimo}
        onChange={props.onChangePrecoMinimo}
      />

      <input placeholder="preço máximo"
        type="number"
        value={props.precoMaximo}
        onChange={props.onChangePrecoMaximo}
      />

      <span>
        <label for="sort"> Ordenação: </label>
        <select name="sort"
          value={props.parametroOrdenacao}
          onChange={props.onChangeParametroOrdenacao}>
          <option value="title">Título</option>
          <option value="price">Preço</option>
          <option value="dueDate">Data</option>
        </select>
      </span>

      <select name="order"
        value={props.order}
        onChange={props.onChangeOrder}>
        <option value={1}>Crescente</option>
        <option value={-1}>Decrescente</option>
      </select>

    </FilterContainer>
  )
}

