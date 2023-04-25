import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  const mockUserService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a user', () => {
    expect(controller.getAllUsers());
  });

  it('should create a user', () => {
    expect(
      controller.signupUser({
        first_name: 'Axel',
        last_name: 'Rodas',
        email: 'axelgolin@hotmail.es',
      }),
    ).toEqual({
      first_name: expect.any(String),
      last_name: expect.any(String),
      email: expect.any(String),
    });
  });
});
