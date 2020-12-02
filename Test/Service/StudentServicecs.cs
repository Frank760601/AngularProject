using CRUD_Angular_and_AspNetCore.DatabaseContext;
using CRUD_Angular_and_AspNetCore.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Angular_and_AspNetCore.Service
{
    public class StudentService : IStudentService
    {
        List<StudentEntity> _studentEntities = new List<StudentEntity>();
        private IServiceProvider serviceProvider { get; }
        private ApplicationDbContext context => serviceProvider.GetService(typeof(ApplicationDbContext)) as ApplicationDbContext;
        public StudentService(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
            _studentEntities.Add(new StudentEntity
            {
                City = "桃園",
                Email = "speshow0601@gmail.com",
                EnrolledDate = DateTime.Now,
                FirstName = "鍾",
                LastName = "富傑",
                Id = 12,
                PhoneNumber = "0972638728",
                Sex = 1
            });
        }
        public bool CreateStudent(StudentEntity entity)
        {
            _studentEntities.Add(entity);
            return true;
        }

        public List<StudentEntity> GeadAllStudents()
        {
            return _studentEntities;
        }
        public List<StudentEntity> GetStudentByCondition(StudentModel model)
        {
            var Query = _studentEntities.AsQueryable();
            if (!string.IsNullOrWhiteSpace(model.FirstName)) {
                Query = Query.Where(s => s.FirstName == model.FirstName);
            }

            return Query.ToList();
        }
        public StudentEntity GetStudentById(int id)
        {
            return _studentEntities.Where(x => x.Id == id).FirstOrDefault();
        }

        public bool UpdateStudent(StudentEntity entity)
        {
            StudentEntity existingStudent = _studentEntities.Where(x => x.Id == entity.Id).FirstOrDefault();
            if (existingStudent.Id > 0)
            {
                existingStudent.City = entity.City;
                existingStudent.Email = entity.Email;
                existingStudent.LastName = entity.LastName;
                existingStudent.FirstName = entity.FirstName;
                existingStudent.PhoneNumber = entity.PhoneNumber;
                existingStudent.EnrolledDate = entity.EnrolledDate;
                existingStudent.Sex = entity.Sex;
            }
            return true;
        }

        public bool DeleteStudent(int id)
        {
            StudentEntity student = _studentEntities.Where(x => x.Id == id).FirstOrDefault();
            _studentEntities.Remove(student);
            return true;
        }
    }
}
