//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace InfoWeb.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class PC
    {
        public int Id { get; set; }
        public string computador_marca { get; set; }
        public string computador_modelo { get; set; }
        public string placa_mae { get; set; }
        public string memoria { get; set; }
        public string hd_marca { get; set; }
        public string hd_modelo { get; set; }
        public Nullable<decimal> velocidade_processador { get; set; }
    }
}
