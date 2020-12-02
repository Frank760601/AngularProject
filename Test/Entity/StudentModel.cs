using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Angular_and_AspNetCore.Entity
{
    [Table("studentquery")]
    public class StudentModel
    {
        public int Id { get; set; }
        
        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public string City { get; set; }
        
        public string Email { get; set; }
        
        public string PhoneNumber { get; set; }
        
        public DateTime EnrolledDate { get; set; }

        public int Sex { get; set; }
    }
}
