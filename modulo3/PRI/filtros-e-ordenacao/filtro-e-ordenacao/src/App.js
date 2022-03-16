import React, { Component } from "react"
import jobList from "./data/jobs.json"
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { ListContainer } from "./style";
import { Filtros } from "./components/Filtros";
export class App extends Component {

   state = {
      jobs: jobList,
      busca: "",
      precoMinimo: "",
      precoMaximo: "",
      parametroOrdenacao: "title",
      order: 1
   }

   onChangeAtualizarPesquisa = (e) => {
      this.setState({ busca: e.target.value })
   }

   onChangePrecoMinimo = (e) => {
      this.setState({ precoMinimo: e.target.value })
   }

   onChangePrecoMaximo = (e) => {
      this.setState({ precoMaximo: e.target.value })
   }

   onChangeParametroOrdenacao = (e) => {
      this.setState({ parametroOrdenacao: e.target.value })
   }

   onChangeOrder = (e) => {
      this.setState({ order: e.target.value })
   }

   render() {
      return <>
         <Header />
         <Filtros
            busca={this.state.busca}
            precoMinimo={this.state.precoMinimo}
            precoMaximo={this.state.precoMaximo}
            parametroOrdenacao={this.state.parametroOrdenacao}
            order={this.state.order}
            onChangeAtualizarPesquisa={this.onChangeAtualizarPesquisa}
            onChangePrecoMinimo={this.onChangePrecoMinimo}
            onChangePrecoMaximo={this.onChangePrecoMaximo}
            onChangeParametroOrdenacao={this.onChangeParametroOrdenacao}
            onChangeOrder={this.onChangeOrder}
         />
         <ListContainer>
            {this.state.jobs
               .filter(job => { //texto campo de busca
                  return (
                     job.title.toLowerCase().includes(this.state.busca.toLowerCase()) || job.description.toLowerCase().includes(this.state.busca.toLowerCase())
                  )
               })
               .filter(job => {
                  return (
                     this.state.precoMinimo === "" || job.price >= this.state.precoMinimo
                  )
               })
               .filter(job => {
                  return (
                     this.state.precoMaximo === "" || job.price <= this.state.precoMaximo
                  )
               })
               .sort((atualJob, proximoJob) => {
                  switch (this.state.parametroOrdenacao) {
                     case "title":
                        return this.state.order * atualJob.title.localeCompare(proximoJob.title)
                     case "dueDate":
                        return this.state.order * (new Date(atualJob.dueDate).getTime() - new Date(proximoJob.dueDate).getTime())
                     default:
                        return this.state.order * (atualJob.price - proximoJob.price)
                  }
               })
               .map(job => {
                  return <Card key={job.id} job={job} />
               })}
         </ListContainer>
      </>
   }
}