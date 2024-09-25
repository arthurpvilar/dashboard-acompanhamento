import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const address = this.addressRepository.create(createAddressDto);
    return this.addressRepository.save(address);
  }

  async findAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  async findOne(id: number): Promise<Address> {
    const address = await this.addressRepository.findOne({ where: { id } });
    if (!address) {
      throw new NotFoundException(`Address with ID ${id} not found`);
    }
    return address;
  }

  async update(
    id: number,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    await this.addressRepository.update(id, updateAddressDto);
    const updatedAddress = await this.addressRepository.findOne({
      where: { id },
    });
    if (!updatedAddress) {
      throw new NotFoundException(`Address with ID ${id} not found`);
    }
    return updatedAddress;
  }

  async remove(id: number): Promise<void> {
    const result = await this.addressRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Address with ID ${id} not found`);
    }
  }
}
